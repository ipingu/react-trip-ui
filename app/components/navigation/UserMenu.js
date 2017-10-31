import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators as tripsActionCreators } from '../../trips/trips'
import Menu from './Menu'

const mapStateToProps = state => {
  return {
    trips: state.trips.entities,
    isLoading: state.trips.app.tripsGet.isLoading,
    hasFailed: state.trips.app.tripsGet.hasFailed,
    showMaximum: 5,
    showAllTrips: state.trips.app.seeAllTrips
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSeeAllTripsClick : tripsActionCreators.doSeeAllTrips
  }
}

const UserMenu = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu))

export default UserMenu
