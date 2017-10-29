import { TRIP_CREATE_SUCCESS, TRIP_CREATE_PROGRESS, TRIP_CREATE_FAILURE } from '../../actions/places'

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
