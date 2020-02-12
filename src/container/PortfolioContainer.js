
import React , {Component} from 'react'
import {connect} from 'react-redux'
import PortfolioItem from '../components/PortfolioItem'
import {Segment , Grid , Card } from 'semantic-ui-react'
import SubHeaderPortfolio from '../components/SubHeaderPortfolio'

class PortfolioContainer extends Component {
      render() {

          debugger 

          const total = this.props.portfolio.reduce( (total, curr) => total + curr.value, 0)
          const formatted_total = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')  

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
                <Grid columns="three" divided>
                <Segment style={{overflow: 'auto', maxHeight: 350 }} >
                <Card.Group itemsPerRow={5}>
                { this.props.portfolio.map(portfolioItem => (
                    < PortfolioItem
                    key ={portfolioItem.id}
                    portfolioItem={portfolioItem}/> 
                ))}
                </Card.Group>
                </Segment>
                </Grid>
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





    // return (
      
    //   <div>
    //     <div>
    //       <br /> 
    //     <SubHeaderPortfolio /> 
    //     <br /> 
    //     <br />
    //     <Card>
    //       <div className="portfolio-value">
    //       <div className="portfolio-value--header">Your Total Portfolio Value Is:</div>
    //       <div className="portfolio-value--content">${formatted_total}</div>
    //     </div> 
    //     </Card>
    //     <div className="portfolio-items"> 
    //     <Card.Group itemsPerRow={5}>
    //           <Container>
    //           {this.props.portfolio.map(portfolioItem => 
    //             (<PortfolioItem
    //             key ={portfolioItem.id}
    //             portfolioItem={portfolioItem}
    //             />))}
    //           </Container>
    //     </Card.Group> 
    //     </div>
    //     </div>
    //   </div>
    // )   
