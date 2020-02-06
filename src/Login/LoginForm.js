import React , {Component} from 'react'
import {Button , Form , Segment , Message} from 'semantic-ui-react' 
import {withRouter} from 'react-router-dom' 
import {connect } from 'react-redux' 
import {fetchedUser} from '../redux/actionCreators'

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
                // .then(loggedInUser => this.props.updateUser(loggedInUser))
                  .then(data => {
                      console.log("fetch complete" , data )
                      if(!data.error){
                          this.props.fetchedUser(data)
                      } else {
                          alert(data.message) 
                      }
                  })
            }

            render() { 
                return (
                    <Segment>
                        <Form
                            onSubmit={this.handleLoginSubmit}
                            size='mini'
                            key='mini'
                            loading={this.props.authenticatingUser}
                            error={this.props.failedLogin}
                        >
                          <Message
                            error
                            header={this.props.failedLogin ? this.props.error : null}
                            /> 

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
                         

                          <Button type='submit'>Login</Button>


                        </Form>
                    </Segment>
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
  

export default connect(null,mapDispatchToProps)(LoginForm)



