
import {LOADING_CURRENCIES , FETCHED_CURRENCIES} from './actionType'

const URL = 'http://localhost:3000/currencies'


function loadingCurrencies() {
    return {type: LOADING_CURRENCIES}
}

function fetchedCurrencies(currencyArray) {
    return {type: FETCHED_CURRENCIES , payload: currencyArray}
}

function fetchingCurrencies(){
    return (dispatch) => {
        dispatch(loadingCurrencies())
        fetch(URL)
        .then(res => res.json())
        .then(currencyArray => {
            console.log(currencyArray)
            // dispatch(fetchedCurrencies(currencyArray))
        })
    }
}

export {fetchingCurrencies} 