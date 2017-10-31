import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators as tripsActionCreators } from '../../trips/trips'
import Menu from './Menu'

const mapStateToProps = state => {
  return {
    trips: state.trips.entities,
    isLoading: state.trips.app.getTrips.isLoading,
    hasFailed: state.trips.app.getTrips.hasFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(tripsActionCreators.doGetTrips)
  }
}

const UserMenu = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu))

export default UserMenu
