
import React from 'react'
// import {connect} from 'react-redux' 
// import {inputAmount} from '../redux/actionCreators' 



const AmountInput = props => (
  <div class="ui icon input">
  <input type="number" 
  value={props.amount}
  onChange={
    (e) => props.handleAmount(parseInt(e.target.value)) 
  }/>
  </div>
)


export default AmountInput 



// const AmountInput = props => (
//   <div class="ui icon input">
//   <input type="number" 
//   value={props.value}
//   onChange={(e) => props.inputAmount(e.target.value)}/>
//   </div>
// )
  
//  const mapStateToProps = (store) => ({
//     value: store.amount
//   })
  

// export default connect(mapStateToProps,{inputAmount})(AmountInput) 

