import React from 'react'
import WatchListItem from './WatchListItem'
import {connect} from 'react-redux'
import {Grid, Card , Segment} from 'semantic-ui-react'
import SubHeaderWatch from './SubHeaderWatch'
import Searchbar from '../components/SearchBar'



const WatchList = props => props.loading ? <p>Loading Currencies...</p> : (

        <div className ="ui container">
            <div>
               <SubHeaderWatch /> 
               <br />
               <br /> 
                <Searchbar /> 
               <br /> 
               <br /> 
               <br /> 
               <br /> 
                <Grid columns="three" divided>
                <Segment style={{overflow: 'auto', maxHeight: 350 }} >
                <Card.Group itemsPerRow={5}>
                { props.watchitems.filter(watchitem => watchitem.currency.name.toLowerCase().includes(props.searchText.toLowerCase()))
                .map(watchitem => (
                    < WatchListItem
                    key ={watchitem.id}
                    watchitem={watchitem}/> 
                ))}
                </Card.Group>
                </Segment>
                </Grid>
            </div>
        </div> 
)

const mapStateToProps = (store) => ({
       watchitems: store.watchitems ,
       searchText: store.searchText ,
       user: store.currentUser
    }
);

export default connect(mapStateToProps)(WatchList)


