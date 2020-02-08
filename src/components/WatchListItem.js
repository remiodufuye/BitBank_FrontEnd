
import React from 'react'
import { Card , Image , Button } from 'semantic-ui-react'

const WatchListItem = props =>  (
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.watchitem.currency.logo}
        /> 
        <Card.Header>{props.watchitem.currency.name}</Card.Header>
        <Card.Meta><strong>{props.watchitem.currency.symbol}</strong></Card.Meta>
        <Card.Meta><strong>${props.watchitem.currency.price}</strong></Card.Meta>
      </Card.Content> 
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Remove from WatchList
          </Button> 
        </div>
      </Card.Content>  
    </Card> 
  ) ; 
  
   export default WatchListItem 