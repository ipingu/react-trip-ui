import React from 'react'
import {connect} from 'react-redux'
import {placeCreateData} from '../actions/place'
import PlaceForm from '../components/PlaceForm'

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
)(PlaceForm)

export default PlaceFormContainer;
