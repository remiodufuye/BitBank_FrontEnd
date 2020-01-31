
import React from 'react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'

// const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />

const CurrencyListItem = props =>  (
     <div>
      <h2> {props.currency.website} </h2>
      <h2>{props.currency.coin_id}</h2>
      <h2>{props.currency.name}</h2>
     </div>
  ) ;

export default CurrencyListItem 






// const CurrencyListItem = props => {
//   return (<div>
//         <h2> {props.currency.website} </h2>
//         <h2>{props.currency.coin_id}</h2>
//         <h2>{props.currency.name}</h2>
//   </div>
//   )
//   }


// with Semantic 
// const CurrencyListItem = props => {
//   return (<div>
//      <Item.Group link>
//     <Item>
//       <Item.Image size='tiny' src='/images/avatar/large/stevie.jpg' />

//       <Item.Content>
//         <Item.Header>{props.currency.name}</Item.Header>
//         <Item.Description>{""}</Item.Description>
//       </Item.Content>
//     </Item>
//   </Item.Group>
//   </div>
//   )
//   }
