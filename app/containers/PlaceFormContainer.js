import React from 'react'
import {connect} from 'react-redux'
import {placeCreateData} from '../actions/place'
import EditPlace from '../components/form/EditPlace'

const mapStateToProps = state => {
  return {
    activeTrip: state.app.activeTrip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (tripId, place) => dispatch(placeCreateData(tripId, place))
  }
}

const PlaceFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlace)

export default PlaceFormContainer;
