import { createReducer, combineReducers } from 'redux'
import { createForms } from 'react-redux-form';

import tripReducer from '../trips/trips'
import { initialTripFormState, initialPlaceFormState } from './forms'

export const generateAction = (type, ...argNames) => {
  return function (...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export default combineReducers({
  trips: tripReducer,
  ...createForms({
    tripModel: initialTripFormState,
    placeModel: initialPlaceFormState
  })
})