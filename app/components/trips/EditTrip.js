import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Control, Form, actions, Errors } from "react-redux-form";
import { actionCreators as tripsActionCreators } from "../../trips/trips";
import MapComponent from "../map/MapComponent";

const EditTrip = props => {
  return (
    <div>
      <h2>Planning a new trip ?</h2>
      <div className="flex split">
        <Form model="tripModel" onSubmit={trip => props.handleSubmit(trip)}>
          <div className="field">
            <label>Where ?</label>
            <Control.text
              model="tripModel.name"
              id="tripModel.name"
            />
          </div>
          <div className="field">
            <label>Du</label>
            <Control type="date" model="tripModel.start" id="tripModel.start" />
            <label>Au</label>
            <Control type="date" model="tripModel.end" id="tripModel.end" />
          </div>
          <div className="field">
            <Control.textarea model="tripModel.summary" id="tripModel.summary" />
          </div>
          <input type="submit" value="Create trip" />
        </Form>
        <MapComponent />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleSubmit: trip => dispatch(tripsActionCreators.doCreateTrip(trip))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrip);
