export const TRIP_CREATE_SUCCESS = 'TRIP_CREATE_SUCCESS'
export const TRIP_CREATE_PROGRESS = 'TRIP_CREATE_PROGRESS'
export const TRIP_CREATE_FAILURE = 'TRIP_CREATE_FAILURE'

export const tripCreateFailure = bool => {
  return {
    type: TRIP_CREATE_FAILURE,
    hasFailed: bool
  }
}

export const tripCreateProgress = bool => {
  return {
    type: TRIP_CREATE_PROGRESS,
    isLoading: bool
  }
}

export const tripCreateSuccess = trip => {
  return {
    type: TRIP_CREATE_SUCCESS,
    trip
  }
}

export const tripCreateData = (name,summary) => {
  return (dispatch) => {
    dispatch(tripCreateProgress(true));

    console.log("Create trip");
    }
}
