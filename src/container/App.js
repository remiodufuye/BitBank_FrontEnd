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


class App extends Component {
  
  componentDidMount(){
    this.props.fetchingCurrencies()
  }

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

