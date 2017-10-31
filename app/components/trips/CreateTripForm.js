import { connect } from 'react-redux'
import EditTrip from '../components/form/EditTrip'
import { actionCreators as tripsActionCreators } from '../trips/trips'
 
const mapStateToProps = (state) => ({
  //myForm: state.forms.f.myForm
})
 
const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (trip) => dispatch(tripsActionCreators.doCreateTrip(trip))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTrip)