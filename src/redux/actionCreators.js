
import {LOADING_CURRENCIES , FETCHED_CURRENCIES , ADD_TO_WATCHLIST , ADD_TO_PORTFOLIO} from './actionType'

const URL = 'http://localhost:3000/currencies'


function loadingCurrencies() {
    return {type: LOADING_CURRENCIES}
}

function fetchedCurrencies(currencyArray) {
    return {type: FETCHED_CURRENCIES , payload: currencyArray}
}

function addtoPortfolio(currencyID){
    // return {type:ADD_TO_PORTFOLIO , payload:currencyID}
    return(dispatch) => {
        console.log("adding here to portfolio")
    }
}

function addtoWatchList(currencyID){
    return {type:ADD_TO_WATCHLIST , payload:currencyID}
}

function fetchingCurrencies(){
    return (dispatch) => {
        dispatch(loadingCurrencies())
         fetch(URL)
        .then(response => response.json()) 
        .then(currencyArray => {
            // console.log(currencyArray)
         dispatch(fetchedCurrencies(currencyArray))
        })
    }
}

export {fetchingCurrencies,addtoPortfolio,addtoWatchList} 