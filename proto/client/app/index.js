import React from 'react'
import ReactDOM from 'react-dom'
import {App} from 'components' 
// import thunk from 'redux-thunk'
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import { Provider } from 'react-redux'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

// const store = createStore(combineReducers({ ...reducers }), compose(
//   applyMiddleware(thunk),
// ))

ReactDOM.render(
  // <Provider store={store}>
  <App />
  // </Provider>
  , document.getElementById('root'))
