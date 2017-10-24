export const PLACES_FETCH_SUCCESS = 'PLACES_FETCH_SUCCESS'
export const PLACES_FETCH_PROGRESS = 'PLACES_FETCH_PROGRESS'
export const PLACES_FETCH_FAILURE = 'PLACES_FETCH_FAILURE'

export const placesFetchFailure = bool => {
  return {
    type: PLACES_FETCH_FAILURE,
    hasFailed: bool
  }
}

export const placesFetchProgress = bool => {
  return {
    type: PLACES_FETCH_PROGRESS,
    isLoading: bool
  }
}

export const placesFetchSuccess = places => {
  return {
    type: PLACES_FETCH_SUCCESS,
    places
  }
}

export const placesFetchData = () => {
  return (dispatch) => {
    dispatch(placesFetchProgress(true));

    fetch('http://localhost:3001/trips/59eb7c4c1079661e84418da8/places')
      .then(response => {
          dispatch(placesFetchProgress(false));
          return response;
      })
      .then(response => response.json())
      .then(places => dispatch(placesFetchSuccess(places.places)))
      .catch(() => dispatch(placesFetchFailure(true)));
    }
}
