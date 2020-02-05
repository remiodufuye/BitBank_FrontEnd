import React , {Component} from 'react';
import { Route , Switch , withRouter} from "react-router-dom"
import '../App.css';
import Navbar from '../Login/Navbar' 
import AllCurrenciesContainer from './AllCurrenciesContainer'
import PortfolioContainer from '../container/PortfolioContainer'
import WatchListContainer from '../container/WatchListContainer'
import {connect} from 'react-redux'
import {fetchingCurrencies} from '../redux/actionCreators'
import currencyDetail from '../currencydetail/currencyDetail'


class App extends Component {
  
  constructor(){
    super()
    this.state ={currentUser :null }
  } 


  componentDidMount(){
    this.props.fetchingCurrencies()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
           <Route path ="/portfolio" component={PortfolioContainer}  />
           <Route path ="/watchlist" component={WatchListContainer}  />
           <Route path="/currencies/:currencyId" component={currencyDetail} />
           <Route path ="/" component={AllCurrenciesContainer}  />
       </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingCurrencies: () => {dispatch(fetchingCurrencies())} ,
})

export default withRouter(connect(null,mapDispatchToProps) (App)) ; 

