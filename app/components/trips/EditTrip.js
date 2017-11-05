import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Control, Form, actions, Errors } from "react-redux-form";
import { actionCreators as tripsActionCreators } from "../../trips/trips";
import { actionCreators as mapsActionCreators } from "../../maps/maps";
import MapComponent from "../map/MapComponent";
import SearchLocation from "../map/SearchLocation";
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";

const EditTrip = props => {
  return (
      <div className="flex split">
        <div>
        <Form model="tripModel" className="center" onSubmit={trip => props.handleSubmit(trip)}>
           <h2>Planning a trip ?</h2>
          <div className="field">
            <label>Where ?</label>
            <SearchLocation onPlaceSelection={props.handlePlaceSelection}/>
          </div>
          <div className="field">
            <Control type="text" model="tripModel.name" id="tripModel.name" placeholder="Trip title"/>
          </div>
          <div className="field">
            <label>From</label>
            <Control type="date" model="tripModel.start" id="tripModel.start" />
            <label>To</label>
            <Control type="date" model="tripModel.end" id="tripModel.end" />
          </div>
          <div className="field">
            <Control.textarea
              model="tripModel.summary"
              id="tripModel.summary"
            />
          </div>
          <input type="submit" value="Create trip" />
        </Form>
        </div>
        <MapComponent />
      </div>
  );
};

const mapStateToProps = state => ({
  places: []
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: trip => dispatch(tripsActionCreators.doCreateTrip(trip)),
  handlePlaceSelection: location => dispatch(mapsActionCreators.doCenterMapOnPlace(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrip);
