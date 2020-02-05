import React from 'react'
import {connect} from 'react-redux' 
import { Icon, Input } from 'semantic-ui-react'


 const  Searchbar = ()  => (
    <Input
    icon={<Icon name='search' inverted circular link />}
    placeholder='Search for Coin ...'
  />
 ) 


const mapStateToProps = (state) => {
    return {

    }
}

export default connect()(Searchbar) 

