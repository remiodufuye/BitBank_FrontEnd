

import React from 'react'
import { Card , Image , Button } from 'semantic-ui-react'

const currencyDetailHeader = props =>  (
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.currency.logo}
        />
        <Card.Header>{props.currency.name}</Card.Header>
        <Card.Meta><strong>{props.currency.symbol}</strong></Card.Meta>
        <Card.Meta><strong>${props.currency.price}</strong></Card.Meta>
      </Card.Content>
      <Link to="/" class ="item">
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

  export default currencyDetailHeader 