
import React from 'react'

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

