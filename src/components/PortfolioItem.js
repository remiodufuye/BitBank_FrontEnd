
import React from 'react'
import { Image , Card , Button  } from 'semantic-ui-react'
import {Link , withRouter } from "react-router-dom";
import {deletefromPortfolio} from '../redux/actionCreators'
import {connect} from 'react-redux'
import swal from 'sweetalert'

const PortfolioItem = (props) => {

  let newValue = parseFloat(props.portfolioItem.currency.price).toFixed(3) * parseFloat(props.portfolioItem.amount).toFixed(3)  
  
            return (
              <Card>
              <Card.Content>
                  <Image
                  floated='right'
                  size='mini'
                  src={props.portfolioItem.currency.logo}
                  /> 
                  {/* <Card.Header>{this.props.watchitem.currency.name}</Card.Header> */}
                  <Card.Meta><strong>{props.portfolioItem.currency.name}</strong></Card.Meta>
                  <Card.Meta><strong>{props.portfolioItem.currency.price}</strong></Card.Meta>
                  <Card.Meta><strong>${props.portfolioItem.amount}</strong></Card.Meta>
              </Card.Content> 
              <Card.Content extra>
                  <div className='ui two buttons'>
                  {/* <Link className ="item" to={`/currencies/${this.props.watchitem.currency.coin_id}`}>  */}
                  {/* <Button basic compact fluid color='green'>
                  Show Details
                  </Button>  */}
                  {/* </Link>  */}
                  <Button basic color='red'
                  onClick={() => {
                      swal("Done!", "Removed From PortFolio!", "success")
                    this.deletefromPortfolio(this.props.portfolioItem.id)}
                      }
                  >
                  Remove From Portfolio 
                  </Button>
                  </div>
              </Card.Content>  
              </Card> 
              )


} 




const mapStateToProps = (store) => ({
  user: store.currentUser ,
  portfolio: store.portfolio 
}) 

const mapDispatchToProps = dispatch => {
return {
  deletefromPortfolio: (portfolioID) => {dispatch(deletefromPortfolio(portfolioID))}
}
} 

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PortfolioItem));


// export default PortfolioItem 


// return ( 
//   <Card>
//       <Item>
//       <Item.Image size='mini' src={props.portfolioItem.currency.logo} />
//       <Item.Content>
//         <Item.Meta>{props.portfolioItem.currency.name}</Item.Meta>
//         <Item.Meta>{props.portfolioItem.currency.price}</Item.Meta>
//         <Item.Meta>{props.portfolioItem.amount} coins</Item.Meta>
//         <Item.Extra>Current Value:</Item.Extra>
//         <Item.Meta>{newValue}</Item.Meta>
//       </Item.Content>
//     </Item> 
//   </Card>     
// )
