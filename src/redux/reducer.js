
import {combineReducers} from 'redux'
import {LOADING_CURRENCIES , FETCHED_CURRENCIES , 
    FETCHED_WATCHITEM , ADDED_WATCHITEM , DELETE_WATCHITEM , CHANGING_SEARCH_TEXT , 
    LOGGED_IN , LOGGED_OUT , CREATE_NEW_USER , AMOUNT_INPUT , FETCHED_PORTFOLIO , ADDED_TO_PORTFOLIO ,DELETE_FRM_PORTFOLIO
} from './actionType'

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
        case FETCHED_PORTFOLIO:
            return action.payload
        case ADDED_TO_PORTFOLIO:
            return [...oldState , action.payload]
        case DELETE_FRM_PORTFOLIO:
            let newPortfolioItem = oldState.filter(porfolio => porfolio.id !== action.payload.id)
            return newPortfolioItem 
        default:
            return oldState
    }

}

const watchItemReducer = (oldState=[], action) => {
    switch(action.type) {
        case FETCHED_WATCHITEM: 
            return action.payload
        case ADDED_WATCHITEM:
            return [...oldState, action.payload]
        case DELETE_WATCHITEM:
            let newWatchItem = oldState.filter(watchitem => watchitem.id !== action.payload.id)
            return newWatchItem
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

  const amountInputReducer = (oldState="", action) => {
      switch(action.type) {
          case AMOUNT_INPUT:
          return action.payload 
          default:
              return oldState
      }
  }


  const userReducer = (oldState=null, action) => {
    switch(action.type) {
        case LOGGED_IN:
            return action.payload
       case CREATE_NEW_USER:
            return action.payload
       case LOGGED_OUT:
           return action.payload
       default:
           return oldState
    }
}
 
const rootreducer = combineReducers({
    loading: loadingReducer ,
    currencies: currenciesReducer ,
    portfolio: portfolioReducer ,
    watchitems: watchItemReducer,
    searchText: searchTextReducer,
    currentUser: userReducer , 
    amount: amountInputReducer
})


export default rootreducer 