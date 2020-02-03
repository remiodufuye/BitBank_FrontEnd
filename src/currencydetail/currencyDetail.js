
import React, {Component} from 'react'
import {Link , withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {Segment , Button , Label , Container  , Card , Image} from 'semantic-ui-react'


class CurrencyDetail extends Component {
  render() {
    // console.log("CurrencyDetail props", this.props) 
    return !this.props.currency ? null : (
    <Container>
        
        {/* Currency Details Here <br />
       <CurrencyDetailHeader currency={this.props.currency}/> */}
    
      <Card>
      <Card.Content >
        <Image floated='right' size='mini'src={this.props.currency.logo}/>
        <Card.Header> {this.props.currency.name}</Card.Header>
        <Card.Meta><strong>Symbol: {this.props.currency.symbol}</strong></Card.Meta>
        <Card.Meta><strong>Price: ${this.props.currency.price}</strong></Card.Meta>
        <Card.Meta><strong>Max Supply: {this.props.currency.max_supply}</strong></Card.Meta>
        <Card.Meta><strong>Market: {this.props.currency.market_cap}</strong></Card.Meta>
      </Card.Content> 
      </Card>  

      <Card>
        <Container>
          <p> <Card.Meta><strong>{this.props.currency.description}</strong></Card.Meta></p>
        </Container>
      </Card> 

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

 export default withRouter(connect(mapStateToProps,null)(CurrencyDetail));


