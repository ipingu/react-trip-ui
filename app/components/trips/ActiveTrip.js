import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators as tripsActionCreators } from "../../trips/trips";
import Trip from "./Trip";

class ActiveTrip extends React.Component {
  
  componentWillReceiveProps(newProps) {
    if (
      this.props.trip == undefined ||
      newProps.match.params.id != this.props.trip._id
    ) {
      this.props.setActiveTrip(newProps.match.params.id);
    }
  }

  render() {
    return <Trip {...this.props} />;
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
