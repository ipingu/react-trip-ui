import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreators as tripsActionCreators  } from '../../trips/trips'
import Layout from './Layout'

const mapStateToProps = state => {
  return {
    trips: state.trips.entities,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(tripsActionCreators.doGetTrips())
  }
}

const UserLayout = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout))

export default UserLayout
