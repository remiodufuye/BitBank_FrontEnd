
import React from 'react'; 
import {Link, NavLink,withRouter} from "react-router-dom";
import {Segment, Header , Icon , Menu } from 'semantic-ui-react'

const Navbar = () => (
    <Segment clearing>
    <Link to="/" class ="item">
    <Header as='h2' floated='left' ><Icon name="dollar sign"/>BitBANK</Header>
    </Link>
    <NavLink to="/" activeClassName="active item" className="item">
    <Header as='h4' floated='right'><Icon name="user secret"/> Login</Header>
    </NavLink>
    <NavLink to="/portfolio" activeClassName="active item" className="item">
    <Header as='h4' floated='right'><Icon name="suitcase"/>Portfolio</Header>
    </NavLink>
    <NavLink to="/watchlist" activeClassName="active item" className="item">
    <Header as='h4' floated='right'><Icon name="bell outline"/>WatchList</Header>
    </NavLink>
    </Segment>
)

const NavBarWithRouter = withRouter(Navbar);
export default NavBarWithRouter;

