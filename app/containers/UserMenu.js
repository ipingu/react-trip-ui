import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { tripsFetchData } from '../actions/trip'
import Menu from '../components/navigation/Menu'

const mapStateToProps = state => {
  console.log(state);
  return {
    trips: state.entities.trips,
    isLoading: state.app.tripsFetchIsLoading,
    hasFailed: state.app.tripsFetchHasFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(tripsFetchData())
  }
}

const UserMenu = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu))

export default UserMenu
