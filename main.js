import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
require('./src/less/minimal.less');

import  {fetchPlacesData} from './actions/places'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import configureStore from './store/';

const store = configureStore();
store.subscribe(() =>
  console.log("State changed", store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('app'));
