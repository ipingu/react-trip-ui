import React from 'react';
import PropTypes from 'prop-types'
import Place from './Place'

class Trip extends React.Component {

  componentWillReceiveProps() {
    console.log("Should fetch data for trip", this.props.match.params.id);
  }

  render() {
    if (this.props.hasFailed) {
      return ( <p>API FAILURE</p> )
    } else if (this.props.trip ) {
      let places = this.props.trip.places == undefined || this.props.trip.places.length == 0 ? null : (
        <div>
          {this.props.trip.places.map((place) => (
            <div key={place._id}>
              <Place place={place}/>
            </div>
          ))}
        </div>
      )
      return (
        <div>
          <h2>{this.props.trip.name}</h2>
          {places}
        </div>
      )
    } else {
      return ( <p>No trip</p>)
    }
  }

}

Trip.propTypes = {
  _id: PropTypes.string,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired
    }).isRequired
  )
}


export default Trip;
