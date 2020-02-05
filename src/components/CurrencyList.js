
import React from 'react'
import CurrencyListItem from './CurrencyListItem'
import {connect} from 'react-redux'
import {Grid, Card} from 'semantic-ui-react'
import SubHeader from './SubHeader'
import Searchbar from '../components/SearchBar'


const CurrencyList = props => props.loading ? <p>Loading...</p> : (

        <div className ="ui container">
            <div>
               <SubHeader /> 
               <br />
               <br /> 
                <Searchbar /> 
               <br /> 
               <br /> 
               <br /> 
               <br /> 
                <Grid columns="three" divided>
                <Card.Group itemsPerRow={3}>
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

