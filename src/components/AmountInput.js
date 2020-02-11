
import React from 'react'
import {connect} from 'react-redux' 
import {inputAmount} from 'react-redux' 


const AmountInput = props => (
  

      
)


const mapStateToProps = (store) => ({
    value: store.amount
  })
  
  export default connect(mapStateToProps,{inputAmount})(AmountInput) 




//   remove  below 

//   const  Searchbar = props  => (
//     <div class="ui icon input">
//     <input type="text" 
//     placeholder="E.g: Bitcoin, Litecoin, Ethereum..." 
//     value={props.value}
//     onChange={(e) => props.onSearch(e.target.value)}
//     />
//     <i aria-hidden="true" class="search circular inverted link icon"></i>
//    </div>
// ) 