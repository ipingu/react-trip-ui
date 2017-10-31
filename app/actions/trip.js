import { generateAction } from './index'
import axios from 'axios'
import history from '../store/history'

export const TRIP_CREATE_SUCCESS = 'TRIP_CREATE_SUCCESS'
export const TRIP_CREATE_PROGRESS = 'TRIP_CREATE_PROGRESS'
export const TRIP_CREATE_FAILURE = 'TRIP_CREATE_FAILURE'

export const TRIP_FETCH_SUCCESS = 'TRIP_FETCH_SUCCESS'
export const TRIP_FETCH_PROGRESS = 'TRIP_FETCH_PROGRESS'
export const TRIP_FETCH_FAILURE = 'TRIP_FETCH_FAILURE'

export const TRIPS_FETCH_SUCCESS = 'TRIPS_FETCH_SUCCESS'
export const TRIPS_FETCH_PROGRESS = 'TRIPS_FETCH_PROGRESS'
export const TRIPS_FETCH_FAILURE = 'TRIPS_FETCH_FAILURE'

export const TRIP_SET_ACTIVE = 'TRIP_SET_ACTIVE'

export const tripSetActive = generateAction(TRIP_SET_ACTIVE, 'id');

export const tripCreateFailure = generateAction(TRIP_CREATE_FAILURE, 'hasFailed');
export const tripCreateProgress = generateAction(TRIP_CREATE_PROGRESS, 'isLoading');
export const tripCreateSuccess = generateAction(TRIP_CREATE_SUCCESS, 'trip');

export const tripFetchFailure = generateAction(TRIP_FETCH_FAILURE, 'hasFailed');
export const tripFetchProgress = generateAction(TRIP_FETCH_PROGRESS, 'isLoading');
export const tripFetchSuccess = generateAction(TRIP_FETCH_SUCCESS, 'trip');

export const tripsFetchFailure = generateAction(TRIPS_FETCH_FAILURE, 'hasFailed');
export const tripsFetchProgress = generateAction(TRIPS_FETCH_PROGRESS, 'isLoading');
export const tripsFetchSuccess = generateAction(TRIPS_FETCH_SUCCESS, 'trips');

export const goto = (target) => {
  return (dispatch) => {
    console.log("Change url", target);
    history.push(target);
  }
}

export const tripCreateData = (model) => {
  return (dispatch) => {
    dispatch(tripCreateProgress(true));

    axios
      .post('http://localhost:3001/trips', model)
      .then(response => {
        dispatch(tripCreateSuccess(response.data));
        dispatch(goto('/trip/view/' + response.data._id));
      })
      .catch((e) => {
        console.log(e);
        dispatch(tripCreateFailure(true));
      });

  }
}

export const tripFetchData = (tripId) => {
  return (dispatch) => {
    dispatch(tripFetchProgress(true));

    axios('http://localhost:3001/trips/' + tripId)
      .then(response => {
        dispatch(tripFetchProgress(false));
        dispatch(tripFetchSuccess(response.data.trip));
        dispatch(tripSetActive(response.data.trip));
      })
      .catch((e) => dispatch(tripFetchFailure(true)));
  }
}

export const tripsFetchData = () => {
  return (dispatch) => {
    dispatch(tripsFetchProgress(true));

    fetch('http://localhost:3001/trips')
      .then(response => {
        dispatch(tripsFetchProgress(false));
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(tripsFetchSuccess(data.trips)))
      .catch((e) => {
        dispatch(tripsFetchFailure(true));
      });
  }
}