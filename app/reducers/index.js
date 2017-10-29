import { createReducer, combineReducers } from 'redux'
import { createForms } from 'react-redux-form';

import { trips } from './entities/trips'
import { placeCreateHasFailed, placeCreateIsLoading } from './app/createPlace'
import { tripFetchHasFailed, tripFetchIsLoading } from './app/fetchTrip'
import { tripsFetchHasFailed, tripsFetchIsLoading } from './app/fetchTrips'
import { tripCreateHasFailed, tripCreateIsLoading } from './app/createTrip'
import { activeTrip } from './app/activeTrip'
import { initialTripFormState } from './forms'

/*

entities :
  - trips
    - completed
    - places
app :
  - activeTrip
  - api
    - fetchTrip
      - progress
      - failure
    - createTrip
      ...
ui :
  - showMenu

*/

export const entitiesReducers = combineReducers({ trips });
export const appReducers = combineReducers({
  tripsFetchHasFailed,
  tripsFetchIsLoading,
  tripFetchHasFailed,
  tripFetchIsLoading,
  placeCreateHasFailed,
  placeCreateIsLoading,
  tripCreateHasFailed,
  tripCreateIsLoading,
  activeTrip
});

export default combineReducers({
  entities: entitiesReducers,
  app: appReducers,
  ...createForms({
    tripModel: initialTripFormState
  })
})