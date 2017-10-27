import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { viewTrip, viewPlaces } from '../actions'
import { placesFetchProgress, placesFetchData  } from '../actions/places'
import Trip from '../components/trip/Trip'



const mapStateToProps = state => {
  return {
    places: state.places,
    isLoading: state.placesFetchIsLoading,
    hasFailed: state.placesFetchHasFailed,
    isCompleted : state.isCompleted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaces: () => dispatch(placesFetchData())
  }
}

const VisibleTrip = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip))

export default VisibleTrip
