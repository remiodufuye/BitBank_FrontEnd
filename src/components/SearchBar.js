import React from 'react'
import {connect} from 'react-redux' 


 const  Searchbar = ()  => {
        return (
            <div className='App'>
                <input 
                    className='search'
                    placeholder="Search For Coin"
                />
            </div>
        )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect()(Searchbar) 