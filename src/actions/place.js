export const PLACE_CREATE_SUCCESS = 'PLACE_CREATE_SUCCESS'
export const PLACE_CREATE_PROGRESS = 'PLACE_CREATE_PROGRESS'
export const PLACE_CREATE_FAILURE = 'PLACE_CREATE_FAILURE'

export const placeCreateFailure = bool => {
  return {
    type: PLACE_CREATE_FAILURE,
    hasFailed: bool
  }
}

export const placeCreateProgress = bool => {
  console.log("Progre", bool);
  return {
    type: PLACE_CREATE_PROGRESS,
    isLoading: bool
  }
}

export const placeCreateSuccess = place => {
  return {
    type: PLACE_CREATE_SUCCESS,
    place
  }
}

export const placeCreateData = (name,summary) => {
  return (dispatch) => {
    dispatch(placeCreateProgress(true));

    fetch('http://localhost:3001/trips/59eb7c4c1079661e84418da8/place', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            name: name,
            summary : summary
          })
      })
      .then(response => {
          dispatch(placeCreateProgress(false));
          return response;
      })
      .then(response => response.json())
      .then(place => dispatch(placeCreateSuccess(place)))
      .catch(() => dispatch(placeCreateFailure(true)));
    }
}
