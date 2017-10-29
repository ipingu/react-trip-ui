import { TRIP_CREATE_SUCCESS, TRIPS_FETCH_SUCCESS } from '../../actions/trip'
import { PLACE_CREATE_SUCCESS } from '../../actions/place'

export const trips = (state = [], action) => {
    switch (action.type) {
        case TRIPS_FETCH_SUCCESS:
            return action.trips;
        case PLACE_CREATE_SUCCESS:
             return state;
        default:
            return state;
    }
}

export default trips
