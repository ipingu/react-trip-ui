import { combineReducers } from 'redux'
import trip from './trip'
import { places, placesFetchHasFailed, placesFetchIsLoading } from './places'
import { place, placeCreateHasFailed, placeCreateIsLoading } from './place'

export default combineReducers({
  places,
  placesFetchHasFailed,
  placesFetchIsLoading,
  placeCreateHasFailed,
  placeCreateIsLoading
})
