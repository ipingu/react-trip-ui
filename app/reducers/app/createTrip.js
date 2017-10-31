import { TRIP_CREATE_SUCCESS, TRIP_CREATE_PROGRESS, TRIP_CREATE_FAILURE } from '../../actions/places'

export const tripCreateHasFailed = (state = false, action) => {
    switch (action.type) {
        case TRIP_CREATE_FAILURE:
            return action.hasFailed;
        case TRIP_CREATE_SUCCESS:
            return false;
        default:
            return state;
    }
}

export const tripCreateIsLoading = (state = false, action) => {
    console.log(action);
    switch (action.type) {
        case TRIP_CREATE_PROGRESS:
            return action.isLoading;
        case TRIP_CREATE_SUCCESS:
            return false;
        default:
            return state;
    }
}
