
import React from 'react'
import CurrencyListItem from './CurrencyListItem'
import {connect} from 'react-redux'
import {Grid, Card , Segment} from 'semantic-ui-react'
import SubHeaderAll from './SubHeaderAll'
import Searchbar from '../components/SearchBar'


const CurrencyList = props => props.loading ? <p>Loading Currencies...</p> : (

        <div className ="ui container">
            <div> 
               <SubHeaderAll /> 
               <br />
               <br /> 
                <Searchbar /> 
               <br /> 
               <br /> 
               <br /> 
               <br /> 
                <Grid columns="three" divided className={
                    props.currencies.filter(currency => currency.name.toLowerCase().
                    includes(props.searchText.toLowerCase())).length === 0 ? 'empty-row' : 'default'
                }>
                <Segment style={{overflow: 'auto', maxHeight: 350  , width:'100%'}} >

                {
                    props.currencies.filter(currency => currency.name.toLowerCase().
                    includes(props.searchText.toLowerCase())).length === 0 ? <h1> No Results Found</h1> : null 
                }
                <Card.Group itemsPerRow={5}>
                { props.currencies.filter(currency => currency.name.toLowerCase().includes(props.searchText.toLowerCase()))
                .map(currency => (
                    < CurrencyListItem
                    key ={currency.id}
                    currency={currency}/> 
                ))}
                </Card.Group>
                </Segment>
                </Grid>
            </div>
        </div> 
)

const mapStateToProps = (store) => ({
       currencies: store.currencies ,
       loading: store.loading ,
       searchText: store.searchText 
    }
);

export default connect(mapStateToProps)(CurrencyList)

