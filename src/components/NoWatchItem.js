
import React from 'react'
import {Grid, Card , Segment , Header} from 'semantic-ui-react'
import SubHeaderWatch from './SubHeaderWatch'
import Searchbar from '../components/SearchBar'

const NoWatchItem = () => {
   return(
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
        <Header> You have No Watch Items </Header>
        </Card.Group>
        </Segment>
        </Grid>
    </div>
</div> 
   )
} 

export default NoWatchItem 