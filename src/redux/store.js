import {createStore , applyMiddleware , compose} from 'redux'
import reducer from './reducer' 
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//set up middleware
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store 
 