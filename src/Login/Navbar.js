
import React , {Component} from 'react'; 
import {Link, NavLink,withRouter} from "react-router-dom";
import {Segment, Header , Icon , Menu } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {loggedOut} from '../redux/actionCreators'
import swal from 'sweetalert'


class Navbar extends Component{
    render() {
        return (
            <Segment clearing>
            <Link to="/" class ="item">
            <Header as='h2' floated='left' ><Icon name="dollar sign"/>BitBANK</Header>
            </Link>
            { !this.props.currentUser ?  
            <NavLink to="/login" activeClassName="active item" className="item">
            <Header as='h4' floated='right'><Icon name="user secret"/> Login </Header>
            </NavLink>
            : 
            <Link>
            <div onClick={this.props.loggedOut} >
            <Header as='h4' floated='right'><Icon name="sign-out" /> Logout</Header> 
            </div>
            </Link> 
            } 
            <NavLink to="/portfolio" activeClassName="active item" className="item">
            <Header as='h4' floated='right'><Icon name="suitcase"/>Portfolio</Header>
            </NavLink>
            <NavLink to="/watchlist" activeClassName="active item" className="item">
            <Header as='h4' floated='right'><Icon name="bell outline"/>WatchList</Header>
            </NavLink>
            </Segment>
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

