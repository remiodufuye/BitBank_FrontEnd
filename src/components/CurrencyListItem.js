
import React from 'react'
import { Item } from 'semantic-ui-react'
import {Button , Icon } from 'semantic-ui-react'

// const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />

const CurrencyListItem = props =>  (
  <div>
    <Item.Group link>
     <Item>
       <Item.Image size='tiny' src={props.currency.logo} />

      <Item.Content>
         <Item.Header>{props.currency.name}</Item.Header>
         <Item.Header>{props.currency.symbol}</Item.Header>
         <Item.Header>{props.currency.price}</Item.Header>
         <Item.Header>{props.currency.market_cap}</Item.Header>

          <Button animated='vertical'>
          <Button.Content hidden>Buy</Button.Content>
          <Button.Content visible>
          <Icon name='dollar sign' />
          </Button.Content>
          </Button>
          <Button animated='vertical'>
          <Button.Content hidden>Watch This</Button.Content>
          <Button.Content visible>
          <Icon name='eye' />
          </Button.Content>
          </Button>

      </Item.Content>
    </Item>
    </Item.Group>
    </div>
  ) ;

export default CurrencyListItem 




