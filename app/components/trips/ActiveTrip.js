import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators as tripsActionCreators } from "../../trips/trips";
import TripLayout from "./TripLayout";

class ActiveTrip extends React.Component {
 
  componentWillMount() {
    console.log(this.props);
    this.props.setActiveTrip(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    console.log("Set active trip");

  }

  render() {
    return <TripLayout {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    trip: state.trips.entities.find(
      trip => trip._id == state.trips.app.activeTrip
    ),
    isLoading: state.trips.app.tripGet.isLoading,
    hasFailed: state.trips.app.tripGet.hasFailed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: tripId => dispatch(tripsActionCreators.doGetTrip(tripId)),
    setActiveTrip: tripId =>
      dispatch(tripsActionCreators.doSetActiveTrip(tripId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ActiveTrip)
);
