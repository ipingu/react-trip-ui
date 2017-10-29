import { connect } from 'react-redux'
import EditTrip from '../components/form/EditTrip'
import { tripCreateData } from '../actions/trip'
 
const mapStateToProps = (state) => ({
  //myForm: state.forms.f.myForm
})
 
const mapDispatchToProps = (dispatch) => ({
  submit: (trip) => dispatch(tripCreateData(trip))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTrip)