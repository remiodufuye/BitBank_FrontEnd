
import React  , {Component } from 'react'
import { Image , Card , Button  } from 'semantic-ui-react'
import {Link , withRouter } from "react-router-dom";
import {deletefromPortfolio} from '../redux/actionCreators'
import {connect} from 'react-redux'
import swal from 'sweetalert'

class PortfolioItem extends Component {
  

  removeFromPortFolio = (portfolioItem) => {
    fetch(`http://localhost:3000/portfolios/${portfolioItem}` , {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(portfolioItem => this.props.deletefromPortfolio(portfolioItem))
}


  render() {
    
    let newValue = ( parseFloat(this.props.portfolioItem.currency.price).toFixed(3) *
                   parseFloat(this.props.portfolioItem.amount).toFixed(3) ).toFixed(3) 

        return (
          <Card>
          <Card.Content>
              <Image
              floated='right'
              size='mini'
              src={this.props.portfolioItem.currency.logo}
              />  
              <Card.Meta><strong>{this.props.portfolioItem.currency.name}</strong></Card.Meta>
              <Card.Meta><strong> Price: ${(this.props.portfolioItem.currency.price).toFixed(3)}</strong></Card.Meta>
              <Card.Meta><strong>{this.props.portfolioItem.amount} Coins </strong></Card.Meta>
              <Card.Meta><strong>  Value : ${newValue} (Approx.) </strong></Card.Meta>
          </Card.Content> 
          <Card.Content extra>
              <div className='ui two buttons'>
              <Button basic color='red'
              onClick={() => {

                  swal("Done!", "Coins Sold", "success")



                 this.removeFromPortFolio(this.props.portfolioItem.id)
              
                  } 
                  } > 
              Sell 
              </Button>
              </div> 
          </Card.Content>  
          </Card> 
          )


      }
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


