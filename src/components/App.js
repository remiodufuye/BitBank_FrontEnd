import React , {Component} from 'react';
import { Route , Switch } from "react-router-dom"
import '../App.css';
import HeaderComponent from './HeaderComponent' 
import AllCurrenciesContainer from './AllCurrenciesContainer'
// import MainContainer from './MainContainer' 

class App extends Component {
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

export default App;
