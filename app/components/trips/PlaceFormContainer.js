import React from 'react'
import {connect} from 'react-redux'
import { actionCreators as tripsActionCreators } from '../../trips/trips'
import EditPlace from './EditPlace'

const mapStateToProps = state => {
  return {
    activeTrip: state.trips.app.activeTrip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (tripId, place) => dispatch(tripsActionCreators.doCreatePlace(tripId, place))
  }
}

const PlaceFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlace)

export default PlaceFormContainer;
