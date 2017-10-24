import React from 'react';
import PropTypes from 'prop-types'
import PlaceArticle from './PlaceArticle'

class Trip extends React.Component {

  componentDidMount() {
    this.props.fetchPlaces();
  }

  render() {
    return (
      <div>
        {this.props.places.map((place) => (
          <div key={place._id}>
            <PlaceArticle name={place.name} summary={place.summary}/>
          </div>
        ))}
    </div>
    )
  }

}

Trip.propTypes = {
  id: PropTypes.string,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired
    }).isRequired
  )
}


export default Trip;
