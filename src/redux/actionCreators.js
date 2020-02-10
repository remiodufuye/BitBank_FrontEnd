
import {LOADING_CURRENCIES , FETCHED_CURRENCIES  , ADDED_WATCHITEM , LOADING_WATCHITEM , FETCHED_WATCHITEM , DELETE_WATCHITEM
     , ADD_TO_PORTFOLIO ,CHANGING_SEARCH_TEXT , LOGGED_IN ,LOGGED_OUT , CREATE_NEW_USER} from './actionType'

const currencies_url = 'http://localhost:3000/currencies'
const watchitems_url = 'http://localhost:3000/watchitems' 
const user_url = 'http://localhost:3000/users'

function onSearch(searchText){
    return {type: CHANGING_SEARCH_TEXT, payload: searchText}
  }

//   ALL USER RELATED    
function fetchedUser(userObject) {
    return {type: LOGGED_IN, payload: userObject}
} 
function loggedOut() {
    return {type: LOGGED_OUT, payload: null}
}

function createdUser(user) {
    return{type: CREATE_NEW_USER, payload:user}
  }

  function createNewUser(newUser) {
    return dispatch => {
      const confObj = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json'
        },
        body: JSON.stringify({user: newUser})
      }
      fetch(user_url, confObj)
      .then(res => res.json())
      .then(newUser => {
        newUser ?
          dispatch(createdUser(newUser))
        : alert('Error Creating New User')
      })
      .catch(err => console.warn(err))
    }
  }

//   ALL PORTFOLIO RELATED    
function addToPortfolio(currencyID){
     return {type: ADD_TO_PORTFOLIO , payload:currencyID}
    }

    
function addingToPortfolio(currencyID) {
    return (dispatch,getState) => {
        console.log(`in adding to portfolio${currencyID}`) 
    }
}

//   ALL WATCHITEM RELATED  
function loadingWatchItems(){
    return {type:LOADING_WATCHITEM} 
}

function fetchedwatchItems(watchitemArray) {
    return {type: FETCHED_WATCHITEM , payload: watchitemArray}
}

function fetchingWatchItems() {
    return (dispatch) => {
        dispatch(loadingWatchItems())
        fetch(watchitems_url)
        .then(response => response.json()) 
        .then(watchItemsArray => {
        dispatch(fetchedwatchItems(watchItemsArray))})
    }
}

function addedWatchItem(watchItemObj){
    return {type: ADDED_WATCHITEM , payload: watchItemObj}
}

function deleteWatchItem(watchItemObj) {
    return {type: DELETE_WATCHITEM , payload:watchItemObj} 
}


//   ALL CURRENCY RELATED  
function loadingCurrencies() {
    return {type: LOADING_CURRENCIES} 
}

function fetchedCurrencies(currencyArray) {
    return {type: FETCHED_CURRENCIES , payload: currencyArray}
}

function fetchingCurrencies(){
    return (dispatch) => {
        dispatch(loadingCurrencies())
         fetch(currencies_url)
        .then(response => response.json()) 
        .then(currencyArray => {
         dispatch(fetchedCurrencies(currencyArray))
        })
    } 
}

export {fetchingCurrencies,addingToPortfolio, onSearch , fetchedUser , 
    loggedOut , fetchingWatchItems , deleteWatchItem , addedWatchItem  , createNewUser}  