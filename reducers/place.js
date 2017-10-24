import { PLACE_CREATE_SUCCESS, PLACE_CREATE_PROGRESS, PLACE_CREATE_FAILURE } from '../actions/place'

 export const placeCreateHasFailed = (state = false, action) => {
    switch (action.type) {
        case PLACE_CREATE_FAILURE:
            return action.hasFailed;
        default:
            return state;
    }
}

export const placeCreateIsLoading = (state = false, action) => {
    switch (action.type) {
        case PLACE_CREATE_PROGRESS:
            return action.isLoading;
        default:
            return state;
    }
}
