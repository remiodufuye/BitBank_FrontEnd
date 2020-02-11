
import React from 'react'
import { Image, Item , Card } from 'semantic-ui-react'

const PortfolioItem = (props) => {

  let newValue = parseFloat(props.portfolioItem.currency.price).toFixed(3) * parseFloat(props.portfolioItem.amount).toFixed(3)  
    return ( 
      <Card>
          <Item>
          <Item.Image size='mini' src={props.portfolioItem.currency.logo} />
          <Item.Content>
            <Item.Meta>{props.portfolioItem.currency.name}</Item.Meta>
            <Item.Meta>{props.portfolioItem.currency.price}</Item.Meta>
            <Item.Meta>{props.portfolioItem.amount} coins</Item.Meta>
            <Item.Extra>Current Value:</Item.Extra>
            <Item.Meta>{newValue}</Item.Meta>
          </Item.Content>
        </Item> 
      </Card>     
  )
} 

export default PortfolioItem 


