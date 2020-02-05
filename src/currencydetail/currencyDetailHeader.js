

import React from 'react'
import { Card , Image } from 'semantic-ui-react'

const CurrencyDetailHeader = props =>  (
      <Card>
      <Card.Content>
        <Image floated='right' size='mini'src={props.currency.logo}/>
        <Card.Header> {props.currency.name}</Card.Header>
        <Card.Meta><strong>Symbol: {props.currency.symbol}</strong></Card.Meta>
        <Card.Meta><strong>Price: ${props.currency.price}</strong></Card.Meta>
        <Card.Meta><strong>Max Supply: {props.currency.max_supply}</strong></Card.Meta>
        <Card.Meta><strong>Market: {props.currency.market_cap}</strong></Card.Meta>
      </Card.Content> 
    </Card> 
  ) 

  export default CurrencyDetailHeader 




