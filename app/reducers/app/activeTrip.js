import { TRIP_FETCH_SUCCESS, TRIP_CREATE_SUCCESS, TRIPS_FETCH_SUCCESS } from '../../actions/trip'

export const activeTrip = (state = false, action) => {
    switch (action.type) {
        case TRIP_FETCH_SUCCESS:
        case TRIP_CREATE_SUCCESS:
            return action.trip._id
        case TRIPS_FETCH_SUCCESS :
            return action.trips.length > 0 ? action.trips[0] : false;
        default:
            return state;
    }
}