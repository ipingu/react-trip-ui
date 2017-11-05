import React from "react";
import { connect } from "react-redux";
import {
  compose,
  withProps,
  withHandlers,
  lifecycle,
  withStateHandlers
} from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow
} from "react-google-maps";

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyACo1v3VDvckZOtTuXI5XmVYIuRP30xKXc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div id="map" />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers(() => {
    const refs = {
      map: undefined
    };

    return {
      centerMap: props => ref => {
        refs.map.fitBounds(props.bounds);
      },
      onMapMounted: () => ref => {
        refs.map = ref;
      }
    };
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillReceiveProps(newProps) {
        newProps.centerMap(newProps);
    }
  })
)(props => (
  <div>
    <GoogleMap ref={props.onMapMounted}
    defaultCenter={{  lat: 0, lng: 0 }}
    zoom={1}>
   

      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  </div>
));

const mapStateToProps = state => ({
  center: state.maps.currentMap.center,
  bounds: state.maps.currentMap.bounds
});

export default connect(mapStateToProps)(MapComponent);
