
import {combineReducers} from 'redux'
import {LOADING_CURRENCIES , FETCHED_CURRENCIES,ADD_TO_PORTFOLIO , ADD_TO_WATCHLIST} from './actionType'

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
            return action.payload
            default:
            return oldState 
    }
}

const portfolioReducer = (oldState=[], action) => {
    switch(action.type) {
        case ADD_TO_PORTFOLIO:
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

 
const rootreducer = combineReducers({
    loading: loadingReducer ,
    currencies: currenciesReducer ,
    portfolio:portfolioReducer ,
    watchlist: watchListReducer
})


export default rootreducer 