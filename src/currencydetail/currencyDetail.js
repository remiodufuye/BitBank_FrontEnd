
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {Segment , Button , Embed , Container  , Card , Image , Modal } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import {addingToWatchList} from '../redux/actionCreators' 
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


class CurrencyDetail extends Component {

  constructor() {
    super() 
    this.state = {
      showmodal: false 
    }

    this.options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Percentage Change Chart'
      },
      series: [
        {
          data: [1, 2, 1, 4, 3, 6]
        }
      ]
    };

  }

  render() {
    // console.log("CurrencyDetail props", this.props) 
    return !this.props.currency ? null : (
    <Container>

      <Card>
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
          <NumberFormat value={this.props.currency.market_cap} displayType={'text'} thousandSeparator={true} /></strong>
         </Card.Meta>
      </Card.Content> 
      </Card>  

      {/* For Description */} 
      <Card>
        <Container>
          <p> <Card.Meta><strong>{this.props.currency.description}</strong></Card.Meta></p>
        </Container>
      </Card> 

      {/* high chart  */}
  
      <HighchartsReact highcharts={Highcharts} options={this.options} />
      

      {/* You Tube Embed  */} 
      
      <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      </Modal.Content>
      </Modal> 


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


