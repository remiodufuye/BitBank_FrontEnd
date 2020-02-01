
import React , {Component} from 'react'; 
// import logo from '../images/BitBANK.png'
import { Link, NavLink, withRouter } from "react-router-dom";
import {Segment, Header , Icon} from 'semantic-ui-react'
class Navbar extends Component {
    render() {

        return (
            <Segment clearing>
              <Link to="/" class ="item">
            <Header as='h1' floated='left' ><Icon name="dollar sign"/>BitBANK</Header>
              </Link>
            <NavLink to="/" activeClassName="active item" className="item">
            <Header as='h2' floated='right'>Home</Header>
            </NavLink>
            <NavLink to="/portfolio" activeClassName="active item" className="item">
            <Header as='h2' floated='right'>Portfolio</Header>
            </NavLink>
            <NavLink to="/watchlist" activeClassName="active item" className="item">
            <Header as='h2' floated='right'>WatchList</Header>
            </NavLink>
            </Segment>
        );
    }
};

const NavBarWithRouter = withRouter(Navbar);
export default NavBarWithRouter;

// old 
// ----

// class Navbar extends Component {
//     render() {

    //     return (
    //       <div className="ui inverted orange menu">
    //         <Link to="/" className="item">
    //           <h2 className="ui header">
    //             <i className="dollar icon" />
    //             <div className="content">BitBANK</div>
    //             {/* <div className="sub header">Decentralized Crypro Exchange</div> */}
    //           </h2>
    //         </Link>
    //         <NavLink to="/" activeClassName="active item" className="item">
    //           <h3 className="ui header">Home</h3>
    //         </NavLink>
    //         <NavLink exact to="/portfolio" activeClassName="active item" className="item">
    //           <h3 className="ui header">Portfolio</h3>
    //         </NavLink>
    //         <NavLink exact to="/watchlist" activeClassName="active item" className="item">
    //           <h3 className="ui header">Watchlist</h3>
    //         </NavLink>
    //       </div>
    //     );
    // }
// };

