import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import minimal from './less/minimal.less'
import configureStore from './store/'
import App from './app.js'

const store = configureStore();
store.subscribe(() =>
  console.log("State changed", store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
 document.getElementById('app'));
