
import React , {Component} from 'react'
import {connect} from 'react-redux'

class PortfolioContainer extends Component {

   render() {
      return(
          <div> 
              <h1>This is the PortfolioContainer </h1>
           </div>
      )
   }
} 


const mapStateToProps = (store) => ({
   watchitems: store.watchitems ,
    portfolio : store.portfolio 
}
);


export default connect(mapStateToProps)(PortfolioContainer)
