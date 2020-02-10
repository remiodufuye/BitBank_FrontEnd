import React , {Component} from 'react';
import { Route , Switch , withRouter , Redirect} from "react-router-dom"
import '../App.css';
import Navbar from '../Login/Navbar' 
import PortfolioContainer from '../container/PortfolioContainer'
import {connect} from 'react-redux'
import {fetchingCurrencies ,fetchingWatchItems} from '../redux/actionCreators'
import currencyDetail from '../currencydetail/currencyDetail'
import WatchList from '../components/WatchList'
import CurrencyList from '../components/CurrencyList'
import LoginForm from '../Login/LoginForm' 
import CreateNewUser from '../Login/createNewUser'
 


class App extends Component {
  
  componentDidMount(){
    this.props.fetchingCurrencies()
    this.props.fetchingWatchItems() 
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
           <Route exact path ='/' render={() => this.props.user ? <CurrencyList /> : <Redirect to = '/login' /> } />
           <Route exact path='/signup' component={CreateNewUser} />
           <Route exact path ="/login" render={() => this.props.user ? <Redirect to='/' />: <LoginForm/>} />
           <Route path ="/portfolio" component={PortfolioContainer}  />
           <Route path ="/watchlist" component={WatchList}  />
           <Route path="/currencies/:currencyId" component={currencyDetail} />
       </Switch>
      </div>
    );
  }
} 


const mapStateToProps = state => {
  return {
    user: state.currentUser,
    watchitems : state.watchitems
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingCurrencies: () => {dispatch(fetchingCurrencies())} ,
  fetchingWatchItems: () => {dispatch(fetchingWatchItems())} 
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (App)) ; 

