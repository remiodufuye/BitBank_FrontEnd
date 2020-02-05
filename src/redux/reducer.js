
import {combineReducers} from 'redux'
import {LOADING_CURRENCIES , FETCHED_CURRENCIES, ADD_TO_PORTFOLIO , ADD_TO_WATCHLIST , CHANGING_SEARCH_TEXT} from './actionType'

const loadingReducer = (oldState=false, action) => {
    switch(action.type) {
        case LOADING_CURRENCIES:
            return true 
        case FETCHED_CURRENCIES:
            return false 
            default:
            return oldState
    }
}

const currenciesReducer = (oldState=[] , action) => {
    switch(action.type) {
        case FETCHED_CURRENCIES:
            return action.payload.filter(currency => currency.price !== null)
            default:
            return oldState 
    }
}

const portfolioReducer = (oldState=[], action) => {
    switch(action.type) {
        case ADD_TO_PORTFOLIO:
            debugger
            return action.payload
            default:
            return oldState
    }

}

const watchListReducer = (oldState=[], action) => {
    switch(action.type) {
        case ADD_TO_WATCHLIST: 
            return action.payload
            default:
            return oldState
    }
}

const searchTextReducer = (oldState="", action) => {
    switch(action.type){
      case CHANGING_SEARCH_TEXT:
        return action.payload
      default:
        return oldState
    }
  }

 
const rootreducer = combineReducers({
    loading: loadingReducer ,
    currencies: currenciesReducer ,
    portfolio:portfolioReducer ,
    watchlist: watchListReducer,
    searchText: searchTextReducer
})


export default rootreducer 