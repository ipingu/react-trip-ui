const initialState = {
  id: undefined,
  places: []
}

import { TRIP_CREATE_SUCCESS, TRIP_CREATE_PROGRESS, TRIP_CREATE_FAILURE } from '../actions/places'
import { PLACE_CREATE_SUCCESS } from '../actions/place'

export const tripCreateHasFailed = (state = false, action) => {
    switch (action.type) {
        case TRIP_CREATE_FAILURE:
            return action.hasFailed;
        default:
            return state;
    }
}

export const tripCreateIsLoading = (state = false, action) => {
    switch (action.type) {
        case TRIP_CREATE_PROGRESS:
            return action.isLoading;
        default:
            return state;
    }
}

export const places = (state = [], action) => {
    switch (action.type) {
        case PLACES_FETCH_SUCCESS:
            return action.places;
        case PLACE_CREATE_SUCCESS:
             return [
               action.place,
               ...state
             ];
        default:
            return state;
    }
}



const trip = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_TRIP':
      return {...state, id : action.id}
    case 'VIEW_TRIP_PLACES':
      return Object.assign({},
        ...state
      )
    case 'ADD_TRIP_PLACE':
      return {
        ...state,
        places: [...state.places, {id: action.id, name: action.name, summary: action.summary}]
      };
    default:
      return state
  }
}

export default trip
