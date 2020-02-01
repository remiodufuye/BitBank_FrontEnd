
import React from 'react'
import { Card , Image , Button } from 'semantic-ui-react'
// import {Button , Icon } from 'semantic-ui-react'
import {addtoPortfolio} from '../redux/actionCreators' 
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux' 

// const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />

const CurrencyListItem = props =>  (
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
        {/* <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Watch
          </Button>
        </div>
      </Card.Content>
    </Card>
  ) ;

  // add to portfolio 
  const mapDispatchToProps = (dispatch) => ({
     buy: (currencyID)=>{dispatch(addtoPortfolio(currencyID))}

  })

export default withRouter(connect(null,mapDispatchToProps)(CurrencyListItem)) ; 





// const CurrencyListItem = props =>  (
//   <Item>
//     <Item.Image size='tiny' src={props.currency.logo} />

//    <Item.Content>
//       <Item.Header>{props.currency.name}</Item.Header>
//       <Item.Header>{props.currency.symbol}</Item.Header>
//       <Item.Header>{props.currency.price}</Item.Header>
//       <Item.Header>{props.currency.market_cap}</Item.Header>

//        <Button animated='vertical'>
//        <Button.Content hidden>
//        <Button.Content visible
//        onClick={(props.buy(props.currency.id))}>Buy</Button.Content >
//        <Icon name='dollar sign' />
//        </Button.Content>
//        </Button>
//        <Button animated='vertical'>
//        <Button.Content hidden>Watch This</Button.Content>
//        <Button.Content visible>
//        <Icon name='eye' />
//        </Button.Content>
//        </Button>

//    </Item.Content>
//  </Item>

// ) ;


