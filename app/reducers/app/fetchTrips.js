import { TRIPS_FETCH_PROGRESS, TRIPS_FETCH_FAILURE } from '../../actions/trip'

 export const tripsFetchHasFailed = (state = false, action) => {
    switch (action.type) {
        case TRIPS_FETCH_FAILURE:
            return action.hasFailed;
        default:
            return state;
    }
}

export const tripsFetchIsLoading = (state = false, action) => {
    switch (action.type) {
        case TRIPS_FETCH_PROGRESS:
            return action.isLoading;
        default:
            return state;
    }
}