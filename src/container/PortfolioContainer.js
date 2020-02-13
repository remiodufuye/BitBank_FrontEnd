
import React , {Component} from 'react'
import {connect} from 'react-redux'
import PortfolioItem from '../components/PortfolioItem'
import {Segment , Grid , Card } from 'semantic-ui-react'
import SubHeaderPortfolio from '../components/SubHeaderPortfolio'

class PortfolioContainer extends Component {
      render() {

          // debugger  

          const total = this.props.portfolio.reduce( (total, curr) => total + curr.value, 0)
          const formatted_total = total.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,')  

          return (
            <div className ="ui container">
            <div>
               <br />
               <SubHeaderPortfolio /> 
               <br /> 
               <Card>
                <div className="portfolio-value">
                <div className="portfolio-value--header"><h3> Total Portfolio Value:</h3></div>
                <div className="portfolio-value--content"><h3> ${formatted_total}</h3></div>
                </div> 
              </Card>
               <br /> 
               <br /> 
                
               { this.props.portfolio ? 
                <Grid columns="three" divided className={
                  this.props.portfolio.length === 0 ? 'empty-row' : 'default'
                }
                >

                <Segment style={{overflow: 'auto', maxHeight: 350  , width:'100%' }} >
                    { 
                      this.props.portfolio.length === 0 ?  <h1> You Do Not Have Coins In Your Portfolio  </h1> : null 
                    }
                <Card.Group itemsPerRow={5}>

                { this.props.portfolio.map(portfolioItem => (
                    < PortfolioItem
                    key ={portfolioItem.id}
                    portfolioItem={portfolioItem}/> 
                ))}
                </Card.Group>
                </Segment>
                </Grid>  : null  
               }



            </div>
        </div> 
          )   
      } 
} 

    const mapStateToProps = (store) => ({
        portfolio : store.portfolio ,
        user: store.currentUser
    }
    )


    export default connect(mapStateToProps)(PortfolioContainer)


