import axios from "axios";
import history from "../store/history";
import { combineReducers } from "redux";

const MAPS_CENTER_ON_PLACE = "maps/CENTER_ON_PLACE";

const mapCenterOnPlace = (center, bounds) => {
  return { type: MAPS_CENTER_ON_PLACE, center, bounds };
};

const doCenterMapOnPlace = place => {
  return dispatch => {
    const { location, viewport } = place.geometry;    
    const center = new google.maps.LatLng(location.lat(), location.lng());
    
    const bounds = new google.maps.LatLngBounds();
    if (viewport) {
      bounds.union(viewport);
    } else {
      bounds.extend(location);
    }

    dispatch(mapCenterOnPlace(center, bounds));
  };
};

const applyCenterMapOnPlace = (state = [], action) => {
  const { center } = action;
  return center;
};

const applySetMapBounds = (state = [], action) => {
  const { bounds } = action;
  return bounds;
};

const centerMapReducer = (state = null, action) => {
  switch (action.type) {
    case MAPS_CENTER_ON_PLACE:
      return applyCenterMapOnPlace(state, action);
    default:
      return state;
  }
};

const boundsMapReducer = (state = null, action) => {
  switch (action.type) {
    case MAPS_CENTER_ON_PLACE:
      return applySetMapBounds(state, action);
    default:
      return state;
  }
};

const reducer = combineReducers({
  currentMap :  combineReducers({
    center: centerMapReducer,
    bounds: boundsMapReducer
  })
});

const actionCreators = {
  doCenterMapOnPlace
};

const actionTypes = {};

export { actionCreators, actionTypes };

export default reducer;
