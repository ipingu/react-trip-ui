import axios from "axios";
import history from "../store/history";
import { combineReducers } from "redux";

export const generateAction = (type, ...argNames) => {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};

const TRIP_CREATE_SUCCESS = "trips/TRIP_CREATE_SUCCESS";
const TRIP_CREATE_PROGRESS = "trips/TRIP_CREATE_PROGRESS";
const TRIP_CREATE_FAILURE = "trips/TRIP_CREATE_FAILURE";

const TRIP_GET_SUCCESS = "trips/TRIP_GET_SUCCESS";
const TRIP_GET_PROGRESS = "trips/TRIP_GET_PROGRESS";
const TRIP_GET_FAILURE = "trips/TRIP_GET_FAILURE";

const TRIP_SET_ACTIVE = "trips/TRIP_SET_ACTIVE";

const TRIPS_GET_SUCCESS = "trips/TRIPS_GET_SUCCESS";
const TRIPS_GET_PROGRESS = "trips/TRIPS_GET_PROGRESS";
const TRIPS_GET_FAILURE = "trips/TRIPS_GET_FAILURE";

const PLACE_CREATE_SUCCESS = "trips/PLACE_CREATE_SUCCESS";
const PLACE_CREATE_PROGRESS = "trips/PLACE_CREATE_PROGRESS";
const PLACE_CREATE_FAILURE = "trips/PLACE_CREATE_FAILURE";

const placeCreateFailure = generateAction(
  PLACE_CREATE_FAILURE,
  "hasFailed"
);
const placeCreateProgress = generateAction(
  PLACE_CREATE_PROGRESS,
  "isLoading"
);
const placeCreateSuccess = generateAction(PLACE_CREATE_SUCCESS, "place");

const tripSetActive = generateAction(TRIP_SET_ACTIVE, "id");

const tripCreateFailure = generateAction(TRIP_CREATE_FAILURE, "hasFailed");
const tripCreateProgress = generateAction(TRIP_CREATE_PROGRESS, "isLoading");
const tripCreateSuccess = generateAction(TRIP_CREATE_SUCCESS, "trip");

const tripGetFailure = generateAction(TRIP_GET_FAILURE, "hasFailed");
const tripGetProgress = generateAction(TRIP_GET_PROGRESS, "isLoading");
const tripGetSuccess = generateAction(TRIP_GET_SUCCESS, "trip");

const tripsGetFailure = generateAction(TRIPS_GET_FAILURE, "hasFailed");
const tripsGetProgress = generateAction(TRIPS_GET_PROGRESS, "isLoading");
const tripsGetSuccess = generateAction(TRIPS_GET_SUCCESS, "trips");

const doChangeLocation = target => {
  return dispatch => {
    console.log("Change url", target);
    history.push(target);
  };
};

const doCreateTrip = model => {
  return dispatch => {
    dispatch(tripCreateProgress(true));

    axios
      .post("http://localhost:3001/trips", model)
      .then(response => {
        dispatch(tripCreateSuccess(response.data));
        dispatch(doChangeLocation("/trip/view/" + response.data._id));
      })
      .catch(e => {
        console.log(e);
        dispatch(tripCreateFailure(true));
      });
  };
};

const doGetTrip = tripId => {
  return dispatch => {
    dispatch(tripGetProgress(true));

    axios("http://localhost:3001/trips/" + tripId)
      .then(response => {
        dispatch(tripGetProgress(false));
        dispatch(tripGetSuccess(response.data.trip));
        dispatch(tripSetActive(response.data.trip));
      })
      .catch(e => dispatch(tripGetFailure(true)));
  };
};

const doGetTrips = () => {
  return dispatch => {
    dispatch(tripsGetProgress(true));

    fetch("http://localhost:3001/trips")
      .then(response => {
        dispatch(tripsGetProgress(false));
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(tripsGetSuccess(data.trips)))
      .catch(e => {
        dispatch(tripsGetFailure(true));
      });
  };
};

const doCreatePlace = (tripId, place) => {
  return dispatch => {
    dispatch(placeCreateProgress(true));
    axios
      .post("http://localhost:3001/trips/" + tripId + "/place", place)
      .then(response => {
        dispatch(tripGetSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
        dispatch(placeCreateFailure(true));
      });
  };
};

const doSetActiveTrip = tripId => {
  return dispatch => {
    dispatch(tripSetActive(tripId));
  };
};

const applyGetTripSuccess = (state = [], action) => {
  const { trip } = action;
  return [
    ...state.slice(0, state.findIndex(t => t._id == trip._id)),
    trip,
    ...state.slice(state.findIndex(t => t._id == trip._id) + 1)
  ];
};

const applyCreateTripSuccess = (state = [], action) => {
  const { trip } = action;
  console.log("Add trip to state", trip);
  return [...state, trip];
};

const applyGetTripsSuccess = (state = [], action) => {
  const { trips } = action;
  console.log("Add trips to state", trips);
  return trips;
};

const applySetNewTripAsActive = (state = [], action) => {
  const { trip } = action;
  return trip._id;
};

const applySetActiveTrip = (state = [], action) => {
  const { id } = action;
  return id;
};

const applyRequestIsLoading = (state = [], action) => {
  const { isLoading } = action;
  return isLoading;
};

const applyRequestHasFailed = (state = [], action) => {
  const { hasFailed } = action;
  return hasFailed;
};

const hasFailedReducer = expectedType => {
  return (state = false, action) => {
    if (expectedType == action.type) {
      return applyRequestHasFailed(state, action);
    }
    return state;
  };
};

const isLoadingReducer = expectedType => {
  return (state = false, action) => {
    if (expectedType == action.type) {
      return applyRequestIsLoading(state, action);
    }
    return state;
  };
};

const activeTripReducer = (state = null, action) => {
  switch (action.type) {
    case TRIP_CREATE_SUCCESS:
      return applySetNewTripAsActive(state, action);
    case TRIP_SET_ACTIVE:
      return applySetActiveTrip(state, action);
    default:
      return state;
  }
};

const entitiesReducer = (state = [], action) => {
  switch (action.type) {
    case TRIPS_GET_SUCCESS:
      return applyGetTripsSuccess(state, action);
    case TRIP_CREATE_SUCCESS:
      return applyCreateTripSuccess(state, action);
    case TRIP_GET_SUCCESS:
      return applyGetTripSuccess(state, action);
    default:
      return state;
  }
};

const appReducer = combineReducers({
  tripsGet: combineReducers({
    hasFailed: hasFailedReducer(TRIPS_GET_FAILURE),
    isLoading: isLoadingReducer(TRIPS_GET_PROGRESS)
  }),
  tripCreate: combineReducers({
    hasFailed: hasFailedReducer(TRIP_CREATE_FAILURE),
    isLoading: isLoadingReducer(TRIP_CREATE_PROGRESS)
  }),
  tripGet: combineReducers({
    hasFailed: hasFailedReducer(TRIP_GET_FAILURE),
    isLoading: isLoadingReducer(TRIP_GET_PROGRESS)
  }),
  activeTrip: activeTripReducer
});

const reducer = combineReducers({
  entities: entitiesReducer,
  app: appReducer
});

const actionCreators = {
  doCreateTrip,
  doGetTrip,
  doGetTrips,
  doCreatePlace,
  doSetActiveTrip
};

const actionTypes = {};

export { actionCreators, actionTypes };

export default reducer;
