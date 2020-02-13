
import React , {Component} from 'react'; 
import {Link, NavLink } from "react-router-dom";
import {Segment, Header , Icon , Sticky } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {loggedOut} from '../redux/actionCreators'
import swal from 'sweetalert'


class Navbar extends Component{
    render() {
        return (
            <Sticky>
            <Segment clearing>
            <Link to="/" class ="item">
            <Header as='h2' floated='left' ><Icon name="dollar sign"/>BitBANK</Header>
            </Link>

            {/* { this.props.currentUser ? 
            <Header as='h4' floated='right'>
            {this.props.currentUser.username}</Header> : null 
            }  */}

            { !this.props.currentUser ?  
            <NavLink to="/login" activeClassName="active item" className="item">
            <Header as='h4' floated='right'><Icon name="user secret"/> Login </Header>
            </NavLink>
            : 
            <NavLink to="/login">
            <div onClick={this.props.loggedOut} >
            <Header as='h4' floated='right'><Icon name="sign-out" /> Logout</Header> 
            </div>
            </NavLink> 
            } 
            { this.props.currentUser ? 
            <NavLink to="/portfolio" activeClassName="active item" className="item">
            <Header as='h4' floated='right'><Icon name="suitcase"/>Portfolio</Header>
            </NavLink> : null 
            }
            { this.props.currentUser ? 
            <NavLink to="/watchlist" activeClassName="active item" className="item">
            <Header as='h4' floated='right'><Icon name="bell outline"/>WatchList</Header>
            </NavLink> : null 
            }

    
            </Segment>
            </Sticky>
        ) 
    }
}   


const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}


const mapDispatchToProps = dispatch => {
    return {
        loggedOut: () => {
          swal("Good Bye!", "Sucessfully signed out!!", "success")
            dispatch(loggedOut())
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

