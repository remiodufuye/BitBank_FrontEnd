
import React from 'react'
import CurrencyListItem from './CurrencyListItem'
import {connect} from 'react-redux'
import {Grid} from 'semantic-ui-react'


const CurrencyList = props => props.loading ? <p>Loading...</p> : (

        <div className ="ui container">
            <div>
                <Grid columns="three" divided>
                { props.currencies.map(currency => (
                    < CurrencyListItem
                    key ={currency.id}
                    currency={currency}/>
                ))}
                </Grid>
            </div>
        </div> 
)

const mapStateToProps = (store) => ({
       currencies: store.currencies ,
       loading: store.loading 
    }
);

export default connect(mapStateToProps)(CurrencyList)

