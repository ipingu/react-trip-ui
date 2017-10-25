import React from 'react';
import PropTypes from 'prop-types'
import PlaceArticle from './PlaceArticle'
import PlaceForm from '../containers/PlaceForm'
import MapComponent from './MapComponent'

class Trip extends React.Component {

  componentDidMount() {
    this.props.fetchPlaces();
  }

  render() {
    return (
      <div>
      <MapComponent/>
      <div id="container">
        <AddPlace />
        {this.props.places.map((place) => (
          <PlaceArticle key={place.id} name={place.name} summary={place.summary} start={place.start}/>
        ))}
      </div>
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
      summary: PropTypes.string.isRequired,
      start: PropTypes.instanceOf(Date)
    }).isRequired
  )
}


export default Trip;
