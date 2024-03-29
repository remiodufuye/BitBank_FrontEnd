
import React, {Component} from 'react'
import {withRouter , Link } from 'react-router-dom' 
import {connect} from 'react-redux'
import {Segment , Button , Header , Container  , Card , Image , Modal , List  , Icon , Form , Input  } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import {addedWatchItem , deleteWatchItem } from '../redux/actionCreators' 
import {addedtoPortFolio , deletefromPortfolio , updatePortFolio } from '../redux/actionCreators'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown' 
import NoDataAvailable from './NoDataAvailable'
import swal from 'sweetalert'
import AmountInput from '../components/AmountInput'



drilldown(Highcharts)

const watchitems_url = 'http://localhost:3000/watchitems'
const portfolio_url = 'http://localhost:3000/portfolios'

class CurrencyDetail extends Component {

  constructor(props) {

    super(props) 
    
    this.state = {
      showmodal: false ,
      newAmount: '' 
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
         

        handleAmount = (e) => {
          this.setState({
            newAmount: e
          })
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


          //  Methods to add items to portfolio 
              addToPortfolio = (coinID , userID , InputAmount , Value ) => {
 
                    //  debugger 
                     let coin = this.props.currency.id 
                     let currencyIDlist = this.props.portfolio.map(p => p.currency_id)
                     let coinIndex = currencyIDlist.indexOf(parseInt(coin))

          
               if ( !this.props.portfolio.map(item => item.currency.coin_id).includes(coinID)) {
                   
                  let configOptions = {
                    method: "POST", 
                    headers: {
                      "Accept":"application/json" ,
                      "Content-Type":"application/json"
                    } ,
                    body: JSON.stringify({
                      user_id: userID , 
                      currency_id: coinID ,
                      amount : InputAmount , 
                      value : Value
                    })  
                }

                fetch(portfolio_url,configOptions)
                .then(response => response.json()) 
                .then(data => {

                  if (data.message === "Coin added to Your Portfolio!") {

                    let newObj = JSON.parse(data.portfolio) 
                    this.props.addedtoPortFolio(newObj)
                    swal("Completed!", data.message, "success")
                    } else {
                    swal("Error!", data.message, 'error') 
                    } 

                }).catch(error => console.log(error.message))
              } else { 

                // update the current portfolio record 
        

                let previousAmount = this.props.portfolio[coinIndex].amount
                let previousValue = this.props.portfolio[coinIndex].value

                  let configOptions = {
                  method: "PATCH", 
                  headers: {
                    "Accept":"application/json" ,
                    "Content-Type":"application/json"
                  } ,
                  body: JSON.stringify({
                    user_id: userID , 
                    currency_id: coinID ,
                    amount: InputAmount + previousAmount ,
                    value: Value + previousValue 
                  })  
              }
                
                fetch(`http://localhost:3000/portfolios/${coinIndex}`,configOptions)
                .then(response => response.json())
                .then( data => {
                   if (data.message === "Portfolio Updated!!") {
                    let newObj = JSON.parse(data.portfolio) 
                    // this.props.addedtoPortFolio(newObj)
                    this.props.updatePortFolio(newObj)
                    swal("Completed!", data.message , "success")
                   } else {
                    swal("Error!", data.message, 'error') 
                   }
                })




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
      <Modal.Header>{this.props.currency.name}  Explained </Modal.Header>
      < iframe width="100%" height="100%" 
        src={this.props.currency.youtube_url} frameborder="0" 
        allow="accelerometer;  autoplay; encrypted-media; gyroscope;
         picture-in-picture" allowFullscreen>
        </iframe> 
      </Modal> 
      </Link>  
    
      {/* coin market cap explorer  */} 
     <List link>
      <List.Item as='a' 
        href = {this.props.currency.coin_market_cap_explorer}
        target="_blank">
        <Button>Coin Explorer</Button>
        </List.Item>
        </List>  
      </Segment> 

      {/* Button Buy  */} 
      <Segment>
        <Link>
        <Modal trigger={<Button content='Buy' color= "green" icon='money bill alternate outline' labelPosition='left'></Button>}>
        <Modal.Header> 
        <Header as='h2' floated='left' ><Icon name="dollar sign"/> Your BitBANK Portfolio </Header>
            <br />
        </Modal.Header>
            <br />
            <br />      
  
            <Modal.Content image>
                 <Card.Content >
                 <Image floated='left' size='mini'src={this.props.currency.logo}/>
                 </Card.Content > 

                 <Form.Field onSubmit={() => this.updatingPortfolio}>
                <div className="form-group">
                <br />
                <label>
               <h3>The Current Price of  {this.props.currency.name} is Approx. 
               ${parseFloat(this.props.currency.price).toFixed(3)} 
                </h3>
                </label>
                <br/>
                {/* <label> <h3> Enter Amount Below : </h3></label><br/> */}
                <label> <h3> Input Number of Coins Below : </h3></label><br/>
                <AmountInput  
                handleAmount={this.handleAmount}
                amount = {this.props.newAmount}
                />  
                </div> 
                <div className="form-group">
                <br /> 
                <Button 
                   content={this.props.portfolio.map(item => item.currency.coin_id).includes(this.props.currency.coin_id) 
                    ? 'Buy Some More' :'Buy'} 
                  color ="green" 
                  icon='dollar sign' 
                  labelPosition='left' 
                  onClick={ () => 
                      {
                        
                        let Value = ( parseFloat(this.props.currency.price).toFixed(2) 
                        * parseFloat(this.state.newAmount ).toFixed(2) ).toFixed(2) 

                        this.addToPortfolio(this.props.currency.coin_id , this.props.user.id , 
                          this.state.newAmount  , Value )
    
                      }
                  
                  }
                />
              </div>
              </Form.Field>
      
            </Modal.Content>
           </Modal>
           </Link>  
       
        {/* Button Watchlist  */}
       <Button 
       content={this.props.watchitems.map(item => item.currency.coin_id).includes(this.props.currency.coin_id) 
        ? 'Already In WatchList' :'Watch'} 
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
      watchitems: store.watchitems ,
      portfolio: store.portfolio ,
      currencies: store.currencies 
 })

    const mapDispatchToProps = dispatch => {
      return {
        addedWatchItem: (watchitem) => {dispatch(addedWatchItem(watchitem))}  ,
        deleteWatchItem: (watchitem) => {dispatch(deleteWatchItem(watchitem))} ,
        addedtoPortFolio: (portfolioitem) => {dispatch(addedtoPortFolio(portfolioitem))} ,
        updatePortFolio: (portfolioitem) => {dispatch(updatePortFolio(portfolioitem))} ,
        deletefromPortfolio: (portfolioitem) => {dispatch(deletefromPortfolio(portfolioitem))}
      }
    } 


 export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CurrencyDetail));


