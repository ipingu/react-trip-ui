import React from 'react'
import PropTypes from 'prop-types'
import { Control, Form, actions } from 'react-redux-form'

const EditTrip = (props) => {

  return (
    <Form model="tripModel" onSubmit={(trip) => props.submit(trip)}>
      <Control type="date" model="tripModel.start" id="tripModel.start" />
      <Control type="date" model="tripModel.end" id="tripModel.end" />
      <Control.text model="tripModel.name" id="tripModel.name" placeholder="Trip name"/>
      <Control.textarea model="tripModel.summary" id="tripModel.summary"/>
      <input type="submit" value="Create trip" />
    </Form>
  )
}

export default EditTrip
