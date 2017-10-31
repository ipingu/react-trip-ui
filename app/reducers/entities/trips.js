import { TRIP_CREATE_SUCCESS, TRIPS_FETCH_SUCCESS, TRIP_FETCH_SUCCESS } from "../../actions/trip";
import { PLACE_CREATE_SUCCESS } from "../../actions/place";

export const trips = (state = [], action) => {
  switch (action.type) {
    case TRIPS_FETCH_SUCCESS:
      return action.trips;
    case TRIP_CREATE_SUCCESS:
      return [...state, action.trip];
    case TRIP_FETCH_SUCCESS:
      return [
        ...state.slice(0, state.findIndex(t => t._id == action.trip._id)),
        action.trip,
        ...state.slice(state.findIndex(t => t._id == action.trip._id) + 1)
      ];
    default:
      return state;
  }
};

export default trips;
