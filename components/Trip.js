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
            <PlaceArticle place={place}/>
          </div>
        ))}
    </div>
    )
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
