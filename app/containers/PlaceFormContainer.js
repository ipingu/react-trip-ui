import React from 'react'
import {connect} from 'react-redux'
import {placeCreateData} from '../actions/place'
import EditPlace from '../components/form/EditPlace'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (name, summary) => dispatch(placeCreateData(name, summary))
  }
}

const PlaceFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlace)

export default PlaceFormContainer;
