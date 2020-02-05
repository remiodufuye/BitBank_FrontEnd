import React from 'react'
import {connect} from 'react-redux' 
import {onSearch} from '../redux/actionCreators' 


 const  Searchbar = props  => (
    <div class="ui icon input">
    <input type="text" 
    placeholder="Search for Coin..." 
    value={props.value}
    onChange={(e) => props.onSearch(e.target.value)}
    />
    <i aria-hidden="true" class="search circular inverted link icon"></i>
   </div>
)
  
 const mapStateToProps = (store) => ({
    value: store.searchText
  })
  

export default connect(mapStateToProps,{onSearch})(Searchbar) 

