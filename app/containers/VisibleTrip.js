import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { tripFetchProgress, tripFetchData  } from '../actions/trip'
import Trip from '../components/trip/Trip'

const mapStateToProps = state => {

  return {
    trip: state.entities.trips.find(trip => trip._id == state.app.activeTrip._id),
    isLoading: state.app.tripFetchIsLoading,
    hasFailed: state.app.tripFetchHasFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: (tripId) => dispatch(tripFetchData(tripId))
  }
}

const VisibleTrip = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip))

export default VisibleTrip
