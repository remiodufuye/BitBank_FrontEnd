
import React from 'react'
import {Link , withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import currencyDetailHeader from './currencyDetailHeader' 


const CurrencyDetail = () => {
  return (
   <currencyDetailHeader />
  )
}

// export default CurrencyDetail 
//painting

const mapStateToProps = (store, ownProps) => ({
   currencies: store.currencies.find(
     currency => {return currency.id === ownProps.match.params.currencyId}
   )
 })

 export default withRouter(connect(mapStateToProps, null)(CurrencyDetail));