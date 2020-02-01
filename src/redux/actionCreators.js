
import {LOADING_CURRENCIES , FETCHED_CURRENCIES , ADDED_TO_WATCHLIST , ADDED_TO_PORTFOLIO} from './actionType'

const URL = 'http://localhost:3000/currencies'


function loadingCurrencies() {
    return {type: LOADING_CURRENCIES}
}

function fetchedCurrencies(currencyArray) {
    return {type: FETCHED_CURRENCIES , payload: currencyArray}
}

function addedToPortfolio(currencyID){
    // return {type:ADDED_TO_PORTFOLIO , payload:currencyID}
    return(dispatch) => {
        console.log(`adding ${currencyID} to portfolio`)
    }
}

function addtoWatchList(currencyID){
    return {type:ADDED_TO_WATCHLIST , payload:currencyID}
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

export {fetchingCurrencies,addedToPortfolio,addtoWatchList} 