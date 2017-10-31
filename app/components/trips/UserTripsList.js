import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators as tripsActionCreators } from "../../trips/trips";
import TripsList from "./TripsList";

const mapStateToProps = state => {
  return {
    trips: state.trips.entities
  };
};

export default withRouter(
  connect(mapStateToProps)(TripsList)
);
