import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { tripsFetchData } from '../actions/trip'
import Layout from '../components/Layout'

const mapStateToProps = state => {
  return {
    trips: state.entities.trips,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(tripsFetchData())
  }
}

const UserLayout = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout))

export default UserLayout
