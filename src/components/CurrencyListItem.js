
import React from 'react'
import { Card , Image , Button } from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";
// import {addedToPortfolio} from '../redux/actionCreators' 

// import {connect} from 'react-redux' 

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

  export default CurrencyListItem 

  // add to portfolio 
//   const mapDispatchToProps = (dispatch) => ({
//      buy: ()=>{dispatch(addedToPortfolio())}

//   })

// export default withRouter(connect(null,mapDispatchToProps)(CurrencyListItem)) ; 





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


