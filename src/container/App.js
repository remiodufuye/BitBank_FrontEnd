import React , {Component} from 'react';
import { Route , Switch , withRouter , Redirect} from "react-router-dom"
import '../App.css';
import Navbar from '../Login/Navbar' 
import AllCurrenciesContainer from './AllCurrenciesContainer'
import PortfolioContainer from '../container/PortfolioContainer'
import WatchListContainer from '../container/WatchListContainer'
import {connect} from 'react-redux'
import {fetchingCurrencies} from '../redux/actionCreators'
import currencyDetail from '../currencydetail/currencyDetail'
import LoginForm from '../Login/LoginForm' 
import swal from 'sweetalert'


class App extends Component {
  
  // constructor(){
  //   super()
  //   this.state ={currentUser :null }
  // } 


  componentDidMount(){
    this.props.fetchingCurrencies()
  }

  // logout = () => {
  //   this.setState({currentUser: null}) 
  //   swal("Good Bye!", "Sucessfully signed out!!", "success")
  // }

  // updateUser = (user) => {
  //   this.setState({currentUser: user})
  // } 

  

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
           <Route exact path ="/login" render={() => this.props.user ? <Redirect to='/' />: <LoginForm/>} />
           <Route path ="/portfolio" component={PortfolioContainer}  />
           <Route path ="/watchlist" component={WatchListContainer}  />
           <Route path="/currencies/:currencyId" component={currencyDetail} />
           <Route path ="/" component={AllCurrenciesContainer}  />
       </Switch>
      </div>
    );
  }
} 

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingCurrencies: () => {dispatch(fetchingCurrencies())} ,
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (App)) ; 

