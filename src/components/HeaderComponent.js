
import React , {Component} from 'react'
import {Header,Image , Segment } from 'semantic-ui-react'
import logo from '../images/BitBANK.png'

 class HeaderComponent extends Component {
    render() {
        return (
                <Segment clearing>
                <Header as='h1' floated='left' >Welcome to BitBANK</Header>
                <Header as='h4' floated='right'>
                    {this.props.user ? <Image circular src={logo} avatar/> : null}
                </Header>
                {/* {this.props.user ? <Button floated='right' onClick={this.props.handleClick}>Logout</Button>: null} */}
                </Segment>          
        )
    }
}

export default HeaderComponent 