
import React from 'react'
import { Card , Image , Button } from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";
import currencyDetail from '../currencydetail/currencyDetail'
// import {addedToPortfolio} from '../redux/actionCreators' 
// import {connect} from 'react-redux' 

{/* <Link className="item" to={`/paintings/${props.painting.id}`}> */}

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
      <Link className ="item" to={`/currencies/${props.currency.coin_id}`}> 
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
  
  // export default withRouter(connect(null,mapDispatchToProps)(CurrencyListItem)) ; 
   export default CurrencyListItem 

  // add to portfolio 
  // const mapDispatchToProps = (dispatch) => ({
  //    buy: ()=>{dispatch(addedToPortfolio())}

  // })

// export default withRouter(connect(null,mapDispatchToProps)(CurrencyListItem)) ; 



