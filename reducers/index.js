import { combineReducers } from 'redux'
import trip from './trip'
import { places, placesFetchHasFailed, placesFetchIsLoading } from './places'

export default combineReducers({
  places,
  placesFetchHasFailed,
  placesFetchIsLoading
})
