
import React, {Component} from 'react'
import {withRouter , Link } from 'react-router-dom' 
import {connect} from 'react-redux'
import {Segment , Button , Header , Container  , Card , Image , Modal , List } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import {addedWatchItem , deleteWatchItem } from '../redux/actionCreators' 
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown' 
import NoDataAvailable from './NoDataAvailable'
import swal from 'sweetalert'



drilldown(Highcharts)

const watchitems_url = 'http://localhost:3000/watchitems'

class CurrencyDetail extends Component {

  constructor(props) {
    super() 
    this.state = {
      showmodal: false 
    }
    
      this.options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: '% Price Change'
        },
        series: [
          {
            name: 'Percentage Change This Week',
            data: [props.currency.percentage_change_1h , 
            props.currency.percentage_change_24h ,
            props.currency.percentage_change_7d] 
          }
        ]
      } 

  }  

      createWatchItem = (coinID , userID) => {
        if ( !this.props.watchitems.map(item => item.currency.coin_id).includes(coinID)) {
          let configOptions = {
            method: "POST", 
            headers: {
              "Accept":"application/json" ,
              "Content-Type":"application/json"
            } ,
            body: JSON.stringify({
              user_id: userID , 
              currency_id: coinID
            })  
      }

       fetch(watchitems_url,configOptions)
       .then(response => response.json())
       .then( data => {
        //  debugger 
              if (data.message === "Coin added to watchlist!") {
                let newObj = JSON.parse(data.watchitem)
                this.props.addedWatchItem(newObj)
                swal("Done!", data.message, "success")
            } else {
                swal("Error!", data.message, 'error') 
            }  
            }
            )
            .catch(error => console.log(error.message))
        }
         else {
           swal("Error!", "Already added to watchlist!!", 'error') 
         }
      }

  render() {

      return (
    <Container>
      {/* Currency Card */}
      <Segment>
      <Card.Content >
        <Image floated='right' size='mini'src={this.props.currency.logo}/>
        <Header as="h1"> {this.props.currency.name}</Header>
        <Card.Meta><strong>Symbol: {this.props.currency.symbol}</strong></Card.Meta>
         <Card.Meta>
          <strong>Price:
          <NumberFormat value={this.props.currency.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong>
         </Card.Meta>
         <Card.Meta>
          <strong>Max Supply:
          <NumberFormat value={this.props.currency.max_supply} displayType={'text'} thousandSeparator={true} /></strong>
         </Card.Meta>
         <Card.Meta>
          <strong>Market Cap:
          <em><NumberFormat value={this.props.currency.market_cap} displayType={'text'} thousandSeparator={true} prefix={'$'}/></em></strong>
         </Card.Meta>
      </Card.Content> 
      </Segment>
     
   
      <br />  
      {/* high chart  */}
      {(this.props.currency.percentage_change_1h && 
      this.props.currency.percentage_change_24h && 
      this.props.currency.percentage_change_7d !== null ) ? 
      <HighchartsReact highcharts={Highcharts} options={this.options} /> : 
      < NoDataAvailable  currency ={this.props.currency.name}/> 
      } 
      
      <br /> 
      {/* For Description */} 
      <Segment>
          <Card.Content>
            <p> <Card.Meta><strong>{this.props.currency.description}</strong></Card.Meta></p>
          </Card.Content>
      </Segment>


      {/* You Tube Embed  */} 
      <Segment>
      <Link>
      <Modal trigger={<Button>You Tube Video </Button>}>
      <Modal.Header>{this.props.currency.name}  Explained</Modal.Header>
      <iframe width="100%" height="100%" src={this.props.currency.youtube_url} frameborder="0" 
      allow="accelerometer;  autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe> 
      </Modal> 
      </Link>  
    

      {/* coin market cap explorer  */} 
     
     <List link>
      <List.Item as='a' 
        href = {this.props.currency.coin_market_cap_explorer}
        target="_blank">
        <Button>coin explorer</Button>
        </List.Item>
        </List>  

      </Segment> 
  
      {/* Button  */}
      <Segment>
       <Button 
       content='Buy' 
       color= "green" 
       icon='money bill alternate outline' 
       labelPosition='left' 

       /> 
     
       <Button 
       content={this.props.watchitems.map(item => item.currency.coin_id).includes(this.props.currency.coin_id) ? 'Already In WatchList' :'Watch'} 
       color ="blue" 
       icon='eye' 
       labelPosition='right' 
       onClick={ () => this.createWatchItem(this.props.currency.coin_id , this.props.user.id)}
       />
       </Segment> 

    </Container> 

    ) ; 
  }
} 

const mapStateToProps = (store, ownProps) => ({
  currency: store.currencies.find(
     currency => {return currency.coin_id === parseInt(ownProps.match.params.currencyId)}
      ) , 
      user: store.currentUser ,
      watchitems: store.watchitems 
 })

    const mapDispatchToProps = dispatch => {
      return {
        addedWatchItem: (watchitem) => {dispatch(addedWatchItem(watchitem))}  ,
        deleteWatchItem: (watchitem) => {dispatch(deleteWatchItem(watchitem))}
      }
    } 


 export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CurrencyDetail));


