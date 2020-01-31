import React , {Component} from 'react';
import { Route , Switch , withRouter} from "react-router-dom"
import '../App.css';
import HeaderComponent from './HeaderComponent' 
import AllCurrenciesContainer from './AllCurrenciesContainer'
import {connect} from 'react-redux'
import {fetchingCurrencies} from '../redux/actionCreators'
// import MainContainer from './MainContainer' 

class App extends Component {
  
  componentDidMount(){
    this.props.fetchingCurrencies()
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
           <Route path ="/" component={AllCurrenciesContainer}  />
       </Switch>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingCurrencies: () => {dispatch(fetchingCurrencies())}
})

export default withRouter(connect(null,mapDispatchToProps) (App)) ; 

