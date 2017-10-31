import React from 'react'
import PropTypes from 'prop-types'
import { Control, Form, actions } from 'react-redux-form'

const EditPlace = (props) => {
    return (
      <Form model="placeModel" onSubmit={(place) => props.handleSubmit(props.activeTrip, place)}>
      <Control.text model="placeModel.name" id="placeModel.name" placeholder="Location"/>
      <Control.textarea model="placeModel.summary" id="placeModel.summary"/>
      <input type="submit" value="Save location" />
    </Form>
    )
}

export default EditPlace
