import React from "react";
import PropTypes from "prop-types";
import { Control, Form, actions } from "react-redux-form";
import { connect } from "react-redux";
import { actionCreators as tripsActionCreators } from "../../trips/trips";

const EditPlace = props => {
  return (
    <Form
      model="placeModel"
      onSubmit={place => props.handleSubmit(props.activeTrip, place)}
    >
      <Control.text
        model="placeModel.name"
        id="placeModel.name"
        placeholder="Location"
      />
      <Control.textarea model="placeModel.summary" id="placeModel.summary" />
      <input type="submit" value="Save location" />
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    activeTrip: state.trips.app.activeTrip
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (tripId, place) =>
      dispatch(tripsActionCreators.doCreatePlace(tripId, place))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlace);
