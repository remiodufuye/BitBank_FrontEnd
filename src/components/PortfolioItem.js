
import React from 'react'
import { Image , Card , Button  } from 'semantic-ui-react'
import {Link , withRouter } from "react-router-dom";
import {deletefromPortfolio} from '../redux/actionCreators'
import {connect} from 'react-redux'
import swal from 'sweetalert'

const PortfolioItem = (props) => {

  let newValue = ( parseFloat(props.portfolioItem.currency.price).toFixed(2) *
                 parseFloat(props.portfolioItem.amount).toFixed(2) ).toFixed(2) 
  
            return (
              <Card>
              <Card.Content>
                  <Image
                  floated='right'
                  size='mini'
                  src={props.portfolioItem.currency.logo}
                  />  
                  <Card.Meta><strong>{props.portfolioItem.currency.name}</strong></Card.Meta>
                  <Card.Meta><strong> Price: ${(props.portfolioItem.currency.price).toFixed(2)}</strong></Card.Meta>
                  <Card.Meta><strong>{props.portfolioItem.amount} Coins </strong></Card.Meta>
                  <Card.Meta><strong>  Value : ${newValue} (Approx.) </strong></Card.Meta>
              </Card.Content> 
              <Card.Content extra>
                  <div className='ui two buttons'>
                  <Button basic color='red'
                  onClick={() => {
                      swal("Done!", "Removed From PortFolio!", "success")
                    this.deletefromPortfolio(this.props.portfolioItem.id)}
                      } > 
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


