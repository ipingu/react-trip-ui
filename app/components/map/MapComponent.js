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
import { MAP } from "react-google-maps/lib/constants";

const MapComponent = compose(
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
  ),
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
    <GoogleMap ref={props.onMapMounted}>
      <Marker
        position={{ lat: 41.85, lng: -87.65 }}
        onClick={props.onToggleOpen}
      >
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <span>Santa Clara</span>
              <br />
              <span>Recommandation : 9/10</span>
              <p>
                Enorme coup de coeur sur cette ville, grace au cheval d or qui
                mange du pain en dormant.
              </p>
              <span>Voir les 18 photos</span>
              <br />
              <span>Add to wish list</span>
            </div>
          </InfoWindow>
        )}
      </Marker>

      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  </div>
));

const mapStateToProps = state => ({
  center: state.maps.currentMap.center,
  bounds: state.maps.currentMap.bounds
});

export default connect(mapStateToProps)(MapComponent);
