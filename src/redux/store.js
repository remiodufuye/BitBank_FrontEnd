import {createStore} from 'redux'
// import reducer from './reducer'  # uncomment once you create your reducer

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store 
