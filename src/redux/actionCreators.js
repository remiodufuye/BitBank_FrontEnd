
import {LOADING_CURRENCIES , FETCHED_CURRENCIES , ADD_TO_WATCHLIST , ADD_TO_PORTFOLIO ,CHANGING_SEARCH_TEXT } from './actionType'

const URL = 'http://localhost:3000/currencies'

function onSearch(searchText){
    return {type: CHANGING_SEARCH_TEXT, payload: searchText}
  }


function loadingCurrencies() {
    return {type: LOADING_CURRENCIES} 
}

function fetchedCurrencies(currencyArray) {
    return {type: FETCHED_CURRENCIES , payload: currencyArray}
}

function addToPortfolio(currencyID){
     return {type: ADD_TO_PORTFOLIO , payload:currencyID}

    }

function addingToPortfolio(currencyID) {
    return (dispatch,getState) => {
        console.log(`in adding to portfolio${currencyID}`) 
        // this will dispatch  dispatch(addToPortfolio(currencyID))
    }
}

function setCurrentUser(user) {
    return {type: SET_CURRENT_USER , payload: user}
  }

  

function addtoWatchList(currencyID){
    return {type: ADD_TO_WATCHLIST , payload:currencyID}
}

function addingToWatchList(currencyID) {
    return (dispatch,getState) => {
        console.log(`in adding to watchlist${currencyID}`) 
        // this will dispatch :  dispatch(addtoWatchList(currencyID))
    }
}

function fetchingCurrencies(){
    return (dispatch) => {
        dispatch(loadingCurrencies())
         fetch(URL)
        .then(response => response.json()) 
        .then(currencyArray => {
         dispatch(fetchedCurrencies(currencyArray))
        })
    }
}

export {fetchingCurrencies,addingToPortfolio,addingToWatchList, onSearch} 