
import React  , {Component} from 'react'
import { Card , Image , Button } from 'semantic-ui-react'
import {Link } from "react-router-dom";


// const WatchListItem = props =>  (
    class WatchListItem extends Component {
        render() {
            return (
            <Card>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src={this.props.watchitem.currency.logo}
                /> 
                <Card.Header>{this.props.watchitem.currency.name}</Card.Header>
                <Card.Meta><strong>{this.props.watchitem.currency.symbol}</strong></Card.Meta>
                <Card.Meta><strong>${this.props.watchitem.currency.price}</strong></Card.Meta>
            </Card.Content> 
            <Card.Content extra>
                <div className='ui two buttons'>
                <Link className ="item" to={`/currencies/${this.props.watchitem.currency.coin_id}`}> 
                <Button basic color='green'>
                Show Details
                </Button> 
                </Link> 
                <Button basic color='red'>
                Remove 
                </Button>
                </div>
            </Card.Content>  
            </Card> 
            )

        }
    }
  
    export default WatchListItem 
 
//    const mapStateToProps = (store, ownProps) => ({
//     currency: store.currencies.find(
//        currency => {return currency.coin_id === parseInt(ownProps.match.params.currencyId)}
//         ) 
//    })

  