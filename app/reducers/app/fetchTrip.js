import { TRIP_FETCH_PROGRESS, TRIP_FETCH_FAILURE } from '../../actions/trip'

 export const tripFetchHasFailed = (state = false, action) => {
    switch (action.type) {
        case TRIP_FETCH_FAILURE:
            return action.hasFailed;
        default:
            return state;
    }
}

export const tripFetchIsLoading = (state = false, action) => {
    switch (action.type) {
        case TRIP_FETCH_PROGRESS:
            return action.isLoading;
        default:
            return state;
    }
}