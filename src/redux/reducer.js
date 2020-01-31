
import {combineReducers} from 'redux'

const initialState = {
    allcryptocurrencies: [],
    searchCoin: "" ,
    watchlistIds: [],
    portfolioIds:[] 
}

function searchCoinReducer(oldState = "", action){
    return oldState
}

function allcryptoreducer(oldState=[], action) {
    return oldState
}
 
const rootreducer = combineReducers({
    searchCoin: searchCoinReducer,
    allcryptocurrencies: allcryptoreducer
})


export default rootreducer 