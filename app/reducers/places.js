import { PLACES_FETCH_SUCCESS, PLACES_FETCH_PROGRESS, PLACES_FETCH_FAILURE } from '../actions/places'
import { PLACE_CREATE_SUCCESS } from '../actions/place'

 export const placesFetchHasFailed = (state = false, action) => {
    switch (action.type) {
        case PLACES_FETCH_FAILURE:
            return action.hasFailed;
        default:
            return state;
    }
}

export const placesFetchIsLoading = (state = false, action) => {
    switch (action.type) {
        case PLACES_FETCH_PROGRESS:
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
