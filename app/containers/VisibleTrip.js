import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { tripFetchProgress, tripFetchData, tripSetActive  } from '../actions/trip'
import Trip from '../components/trip/Trip'

class VisibleTrip extends React.Component {
  
  componentWillReceiveProps(newProps) {
    if (this.props.trip == undefined || newProps.match.params.id != this.props.trip._id) {
      this.props.setActiveTrip(newProps.match.params.id);
    }
  }

  render() {
    return <Trip {...this.props}/>;
  }
}

const mapStateToProps = state => {
  return {
    trip: state.entities.trips.find(trip => trip._id == state.app.activeTrip),
    isLoading: state.app.tripFetchIsLoading,
    hasFailed: state.app.tripFetchHasFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: (tripId) => dispatch(tripFetchData(tripId)),
    setActiveTrip: (tripId) => dispatch(tripSetActive(tripId))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTrip))
