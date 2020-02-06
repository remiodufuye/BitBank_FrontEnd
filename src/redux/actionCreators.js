
import {LOADING_CURRENCIES , FETCHED_CURRENCIES , ADD_TO_WATCHITEMS , ADD_TO_PORTFOLIO ,CHANGING_SEARCH_TEXT 
    , LOGGED_IN ,LOGGED_OUT } from './actionType'

const currencies = 'http://localhost:3000/currencies'
const watchitems = 'http://localhost:3000/watchitems' 

function onSearch(searchText){
    return {type: CHANGING_SEARCH_TEXT, payload: searchText}
  }

function fetchedUser(userObject) {
    return {type: LOGGED_IN, payload: userObject}
} 

function loggedOut() {
    return {type: LOGGED_OUT, payload: null}
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


function addtoWatchItem(currencyID){
    return {type: ADD_TO_WATCHITEMS , payload:currencyID}
}

function addingToWatchItems(currencyID) { 
    return (dispatch,getState) => {
        console.log(`in adding to watchlist${currencyID}`) 
        // this will dispatch :  dispatch(addtoWatchList(currencyID))
    }
} 

function fetchingCurrencies(){
    return (dispatch) => {
        dispatch(loadingCurrencies())
         fetch(currencies)
        .then(response => response.json()) 
        .then(currencyArray => {
         dispatch(fetchedCurrencies(currencyArray))
        })
    } 
}

export {fetchingCurrencies,addingToPortfolio, addingToWatchItems, onSearch , fetchedUser , loggedOut} 