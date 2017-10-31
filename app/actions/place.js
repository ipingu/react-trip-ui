import { generateAction } from "./index";
import axios from 'axios';
import { tripFetchSuccess } from './trip'

export const PLACE_CREATE_SUCCESS = "PLACE_CREATE_SUCCESS";
export const PLACE_CREATE_PROGRESS = "PLACE_CREATE_PROGRESS";
export const PLACE_CREATE_FAILURE = "PLACE_CREATE_FAILURE";

export const placeCreateFailure = generateAction(
  PLACE_CREATE_FAILURE,
  "hasFailed"
);
export const placeCreateProgress = generateAction(
  PLACE_CREATE_PROGRESS,
  "isLoading"
);
export const placeCreateSuccess = generateAction(PLACE_CREATE_SUCCESS, "place");

export const placeCreateData = (tripId, place) => {
  return dispatch => {
    dispatch(placeCreateProgress(true));
    axios
      .post("http://localhost:3001/trips/" + tripId + "/place", place)
      .then(response => {
        dispatch(tripFetchSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
        dispatch(placeCreateFailure(true));
      });
  };
};
