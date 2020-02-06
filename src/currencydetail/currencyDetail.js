
import React, {Component} from 'react'
import {withRouter , Link } from 'react-router-dom' 
import {connect} from 'react-redux'
import {Segment , Button , Embed , Container  , Card , Image , Modal } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import {addingToWatchList} from '../redux/actionCreators' 
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown' 
import NoDataAvailable from './NoDataAvailable'




drilldown(Highcharts)


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

  render() {
    // console.log("CurrencyDetail props", this.props) 
    return !this.props.currency ? null : (
    <Container>
      {/* <Card > */}
      <Segment>
      <Card.Content >
        <Image floated='right' size='mini'src={this.props.currency.logo}/>
        <Card.Header> {this.props.currency.name}</Card.Header>
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
      {/* </Card>   */}
   
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
      <Link>
      <Modal trigger={<Button>You Tube Video </Button>}>
      <Modal.Header>{this.props.currency.name}  Explained</Modal.Header>
      <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      </Modal.Content>
      </Modal> 
      </Link> 

      {/* coin market cap explorer  */}

      <Link>
      <Button onclick={this.props.currency.coin_market_cap_explorer}> Coin Explorer </Button>
      </Link>

      
      {/* Button  */}
      <Segment>
       <Button content='Buy' color= "green" icon='money bill alternate outline' labelPosition='left' />
       <Button content='Watch' color ="blue" icon='eye' labelPosition='right' />
       </Segment> 

    </Container> 


    ) ; 
  }
} 


const mapStateToProps = (store, ownProps) => ({
  currency: store.currencies.find(
     currency => {return currency.coin_id === parseInt(ownProps.match.params.currencyId)}
   )
 })

 const mapDispatchToProps = (dispatch) => ({
    watch: (currencyId) => {dispatch(addingToWatchList(currencyId))}
 })


 export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CurrencyDetail));


