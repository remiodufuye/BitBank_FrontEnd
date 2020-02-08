
import React from 'react'
import { Card , Image , Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const WatchListItem = props =>  (
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.watchitem.logo}
        /> 
        <Card.Header>{props.watchitem.name}</Card.Header>
        <Card.Meta><strong>{props.watchitem.symbol}</strong></Card.Meta>
        <Card.Meta><strong>${props.watchitem.price}</strong></Card.Meta>
      </Card.Content> 
      <Link className ="item" to={`/currencies/${props.watchitem.coin_id}`}> 
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Show Coin Details
          </Button> 
        </div>
      </Card.Content> 
      </Link>
    </Card> 
  ) ; 
  
   export default WatchListItem 