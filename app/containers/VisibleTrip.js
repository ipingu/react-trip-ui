import { connect } from 'react-redux'
import { viewTrip, viewPlaces } from '../actions'
import { placesFetchProgress, placesFetchData  } from '../actions/places'
import Trip from '../components/Trip'



const mapStateToProps = state => {
  return {
    places: state.places,
    isLoading: state.placesFetchIsLoading,
    hasFailed: state.placesFetchHasFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaces: () => dispatch(placesFetchData())
  }
}

const VisibleTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip)

export default VisibleTrip
