
  
import React from 'react'
import {connect} from 'react-redux'
import {createNewUser} from '../redux/actionCreators'

import { Button,Checkbox, Form,Divider,Grid,Icon } from 'semantic-ui-react'
import swal from 'sweetalert'



class createNewUSer extends React.Component{
  state = {
    username: '',
    password: ''
    // profilephoto: ''
  }

  handleChange = e => {
    // debugger
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value 
    })
  }

  handleSubmit = e => {
    const newUser = {
      username: this.state.username,
      password: this.state.password 
    }

    e.preventDefault()
    if(this.props.createNewUser(newUser)){
      swal(`Welcome ${this.state.username}!`, "User Profile Created!", "success")
      this.closeModal()
    }else {
      // swal("Sorry", "Username already taken.", "error")
      swal("Done", "User Profile created!", "success")
    }
  }


  render(){
    const {value} = this.state
    return(
      <React.Fragment>
        <Divider hidden/>
        <Grid centered columns={1}>
          <Form onSubmit={this.handleSubmit}>
            <Icon name='user circle'size='huge'/>
            <Form.Input
              name='username'
              placeholder='Username...'
              control='input'
              type='text'
              onChange={this.handleChange}
              required
            />
            <Form.Input
              placeholder='Password...'
              name='password'
              type='password'
              onChange={this.handleChange}
              required/>
    
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions'/>
            </Form.Field>
            <Button type='submit'>Create New User </Button>
          </Form>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({createNewUser: (user) => dispatch(createNewUser(user))})
}

export default connect(null, mapDispatchToProps)(createNewUSer)