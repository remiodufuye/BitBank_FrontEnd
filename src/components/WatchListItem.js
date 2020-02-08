
import React  , {Component} from 'react'
import { Card , Image , Button } from 'semantic-ui-react'
import {Link , withRouter } from "react-router-dom";
import {deleteWatchItem} from '../redux/actionCreators'
import {connect} from 'react-redux'



class WatchListItem extends Component {
    
    
    removeWatchItem = (watchitem) => {
        fetch(`http://localhost:3000/watchitems/${watchitem}` , {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(watchitem => this.props.deleteWatchItem(watchitem))
    }


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
                <Button basic color='red'
                onClick={ 
                    
                    () => { console.log(`this is the id ${this.props.watchitem.id}`)
                        this.removeWatchItem(this.props.watchitem.id)
                    }
                }
                >
                Remove 
                </Button>
                </div>
            </Card.Content>  
            </Card> 
            )

        }
    }

        const mapStateToProps = (store, ownProps) => ({
                user: store.currentUser ,
                watchitems: store.watchitems 
        }) 
      
          const mapDispatchToProps = dispatch => {
            return {
              deleteWatchItem: (watchitem) => {dispatch(deleteWatchItem(watchitem))}
            }
          } 
      



    export default withRouter(connect(mapStateToProps,mapDispatchToProps)(WatchListItem));
  
 

    // <Modal.Header>
    // <p>{player.first_name} {player.last_name}
    // {this.props.user && this.props.favorites.map(favorite => favorite.player_id).includes(player.id) ? 
    // <Button size='mini' onClick={
    //     () => this.removeFavorite(this.props.favorites.find(favorite => favorite.user_id === this.props.user.id
    //      && 
    // favorite.player_id === player.id ))}>Remove From Favorites</Button>: null}

    // {this.props.user && !this.props.user.favorites.map(favorite => favorite.player_id).includes(player.id) ? 
    // <Button size='mini' onClick={() => this.createFavorite(player)}>Add To Favorites</Button> : null}
    //  </p>
    // </Modal.Header>
 

  