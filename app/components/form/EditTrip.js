import React from 'react'
import PropTypes from 'prop-types'
import { Control, Form, actions } from 'react-redux-form'

const EditTrip = (props) => {

  return (
    <Form model="tripModel" onSubmit={(trip) => props.submit(trip)}>
      <Control.text model="tripModel.firstName" id="tripModel.firstName" />
      <Control.text model="tripModel.lastName" id="tripModel.lastName" />

      <button type="submit">Save</button>
    </Form>
  )
}

export default EditTrip
