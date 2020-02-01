
import React from 'react'
import CurrencyListItem from './CurrencyListItem'
import {connect} from 'react-redux'
import {Grid, Card} from 'semantic-ui-react'


const CurrencyList = props => props.loading ? <p>Loading...</p> : (

        <div className ="ui container">
            <div>
                <Grid columns="three" divided>
                <Card.Group itemsPerRow={6}>
                { props.currencies.map(currency => (
                    < CurrencyListItem
                    key ={currency.id}
                    currency={currency}/>
                ))}
                </Card.Group>
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

