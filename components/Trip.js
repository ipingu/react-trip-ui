import React from 'react';
import PropTypes from 'prop-types'
import PlaceArticle from './PlaceArticle'
import AddPlace from '../containers/AddPlace'
import MapComponent from './MapComponent'

class Trip extends React.Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchPlaces();
  }

  render() {
    return (
      <div>
      <MapComponent/>
      <div id="container">
        <AddPlace />
        {this.props.places.map((place) => (
          <PlaceArticle key={place.id} name={place.name} summary={place.summary}/>
        ))}
      </div>
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
