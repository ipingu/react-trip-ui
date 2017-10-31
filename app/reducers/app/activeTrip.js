import { TRIP_FETCH_SUCCESS, TRIP_CREATE_SUCCESS, TRIPS_FETCH_SUCCESS, TRIP_SET_ACTIVE } from '../../actions/trip'

export const activeTrip = (state = false, action) => {
    switch (action.type) {
        case TRIP_CREATE_SUCCESS:
            return action.trip._id;
        case TRIP_SET_ACTIVE:
            return action.id;
        default:
            return state;
    }
}