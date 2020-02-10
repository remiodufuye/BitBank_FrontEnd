
  
import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../redux/actionCreators'

import { Button,Checkbox, Form,Divider,Grid,Icon } from 'semantic-ui-react'
import swal from 'sweetalert'



class createNewUSer extends React.Component{
  state = {
    username: '',
    password: '',
    avatar: 'https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png'
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }



  handleSubmit = e => {
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      avatar: this.state.avatar
    }
    e.preventDefault()
    if(this.props.createUser(newUser)){
      swal(`Welcome ${this.state.username}!`, "User Profile Created!", "success")
      this.closeModal()
    }else {
      swal("Sorry", "Username already taken.", "warning")
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
            <Form.Input placeholder='Avatar url e.g.: http://website.com/img/avatar.jpg' type='text'
            name='avatar'
            onChange={this.handleChange}
            />
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions'/>
            </Form.Field>
            <Button type='submit'>Create User </Button>
          </Form>
        </Grid>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return ({createUser: (user) => dispatch(createUser(user))})
}

export default connect(null, mapDispatchToProps)(SignUp)