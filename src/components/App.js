import React , {Component} from 'react';
import { Route , Switch , withRouter} from "react-router-dom"
import '../App.css';
import Navbar from './Navbar' 
import AllCurrenciesContainer from './AllCurrenciesContainer'
import PortfolioContainer from './PortfolioContainer'
import WatchListContainer from './WatchListContainer'
import {connect} from 'react-redux'
import {fetchingCurrencies} from '../redux/actionCreators'
import Footer from './Footer' 
// import MainContainer from './MainContainer' 

class App extends Component {
  
  componentDidMount(){
    this.props.fetchingCurrencies()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <br/>
        <br/> 
        <Switch>
           <Route path ="/portfolio" component={PortfolioContainer}  />
           <Route path ="/watchlist" component={WatchListContainer}  />
           <Route path ="/" component={AllCurrenciesContainer}  />
       </Switch>
       <Footer /> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingCurrencies: () => {dispatch(fetchingCurrencies())} ,
})

export default withRouter(connect(null,mapDispatchToProps) (App)) ; 

