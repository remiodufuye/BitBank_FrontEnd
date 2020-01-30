import React , {Component} from 'react';
import { Route , Switch } from "react-router-dom"
import '../App.css';
import HeaderComponent from './HeaderComponent' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>

       </Switch>
        
   
      </div>
    );
  }
}

export default App;
