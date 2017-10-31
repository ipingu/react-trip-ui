import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Control, Form, actions } from 'react-redux-form'
import { actionCreators as tripsActionCreators } from '../../trips/trips'


const EditTrip = (props) => {
  return (
    <Form model="tripModel" onSubmit={(trip) => props.handleSubmit(trip)}>
      <Control type="date" model="tripModel.start" id="tripModel.start" />
      <Control type="date" model="tripModel.end" id="tripModel.end" />
      <Control.text model="tripModel.name" id="tripModel.name" placeholder="Trip name"/>
      <Control.textarea model="tripModel.summary" id="tripModel.summary"/>
      <input type="submit" value="Create trip" />
    </Form>
  )
}

const mapStateToProps = (state) => ({
})
 
const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (trip) => dispatch(tripsActionCreators.doCreateTrip(trip))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTrip)