import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import minimal from './less/minimal.less'
import configureStore from './store/'
import App from './app.js'
import history from './store/history'


const store = configureStore();
store.subscribe(() =>
  console.log("State changed", store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
 document.getElementById('app'));
