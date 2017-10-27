import { combineReducers } from 'redux'
import { createForms } from 'react-redux-form';
import trip from './trip'
import { places, placesFetchHasFailed, placesFetchIsLoading } from './places'
import { placeCreateHasFailed, placeCreateIsLoading } from './place'
import { tripCreateHasFailed, tripCreateIsLoading } from './trip'
import { initialTripFormState } from './forms'

export default combineReducers({
  places,
  placesFetchHasFailed,
  placesFetchIsLoading,
  placeCreateHasFailed,
  placeCreateIsLoading,
  tripCreateHasFailed,
  tripCreateIsLoading,

  ...createForms({
    tripModel: initialTripFormState
  })
})
