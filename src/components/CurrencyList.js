
import React from 'react'
import CurrencyListItem from './CurrencyListItem'
import {connect} from 'react-redux'


const CurrencyList = props => props.loading ? <p>Loading...</p> : (

        <div className ="ui container">
            <div>
                { props.currencies.map(currency => (
                    < CurrencyListItem
                    key ={currency.id}
                    currency={currency}/>
                ))}
            </div>
        </div> 
)

const mapStateToProps = (store) => ({
       currencies: store.currencies ,
       loading: store.loading 
    }
);

export default connect(mapStateToProps)(CurrencyList)

