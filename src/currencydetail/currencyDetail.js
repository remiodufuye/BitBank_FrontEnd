
import React, {Component} from 'react'
import {Link , withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import currencyDetailHeader from './currencyDetailHeader' 


class CurrencyDetail extends Component {
  render() {
    console.log("CurrencyDetail props", this.props) 
    return !this.props.currency ? null : (
     <div> Currency Details Here </div>
    ) ; 
  }
} 

const mapStateToProps = (store, ownProps) => ({
  currency: store.currencies.find(
     currency => {return currency.coin_id === ownProps.match.params.currencyId}
   )
 })

 export default withRouter(connect(mapStateToProps, null)(CurrencyDetail));


