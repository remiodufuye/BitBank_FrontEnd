import React , {Component} from 'react'
import {Button , Form , Divider , Message , Grid , Icon} from 'semantic-ui-react' 
import {connect } from 'react-redux' 
import {fetchedUser} from '../redux/actionCreators'
import swal from 'sweetalert'
import { Link} from 'react-router-dom'

class LoginForm extends Component {
    
            state = {
                username: '',
                password: ''
            } 
            
            handleChange = (e,{name,value}) => {
                this.setState({[name]:value })
            }

        
            handleLoginSubmit = () => {
                fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password 
                    })
                }).then(res => res.json())
                  .then(data => {
                      console.log("fetch complete" , data )
                      if(!data.error){
                          this.props.fetchedUser(data)
                          swal("Welcome!", "Login Sucessful!", "success")
                      } else {
                          alert(data.message) 
                      }
                  })
            }

            render() { 
                return (
                      <React.Fragment>
                        <Divider hidden />
                        <Divider hidden /> 
                        <Divider hidden />
                        <Divider hidden />
                        <Grid centered columns ={1}>
                        <Form
                            onSubmit={this.handleLoginSubmit}
                            // size='mini'
                            // key='mini'
                            loading={this.props.authenticatingUser}
                            error={this.props.failedLogin}
                        >
                          <Message
                            error
                            header={this.props.failedLogin ? this.props.error : null}
                            /> 
                            <Icon name= 'users' size = "huge" /> 
                            {/* old icon : users  */}
                            <Form.Input 
                                label='username'
                                placeholder='username'
                                name='username'
                                onChange={this.handleChange}
                                value={this.state.username}
                            />  

                            <Form.Input 
                                type='password'
                                label='password'
                                placeholder='password'
                                name='password'
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                         

                          {/* <Button type='submit'>Login</Button> */}

                          { this.state.username && this.state.password
                              ? <Button
                                type='submit'
                                >Login</Button>
                              : <Button
                                disabled
                                type='submit'
                              >Login</Button>
                            }

                            <Divider />
                            <Link to='/signup'>
                              <Button type='button'>Create a new account</Button>
                            </Link>


                        </Form>


                        </Grid>
                        </React.Fragment> 
                
                )
            }


} 

const mapDispatchToProps = dispatch => {
    return {
      fetchedUser: (user) => {
        dispatch(fetchedUser(user))
      }
    }
  }
  
const mapStateToProps = store => ({currentUser: store.currentUser})

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)



