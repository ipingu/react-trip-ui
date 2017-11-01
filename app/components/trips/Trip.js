import React from "react";
import PropTypes from "prop-types";
import Place from "./Place";
import EditPlace from "./EditPlace";

class Trip extends React.Component {
  render() {
    if (this.props.hasFailed) {
      return <p>API FAILURE</p>;
    } else if (this.props.isLoading) {
      return <p>Loading</p>;
    } else if (this.props.trip) {
      let places =
        this.props.trip.places == undefined ||
        this.props.trip.places.length == 0 ? null : (
          <div>
            {this.props.trip.places.map(place => (
              <div key={place._id}>
                <Place place={place} />
              </div>
            ))}
          </div>
        );

      return (
        <article className="trip">
          <h1>{this.props.trip.name}</h1>
          {!this.props.trip.isCompleted && <EditPlace />}
          {places}
        </article>
      );
    } else {
      return <p>No trip</p>;
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
};

export default Trip;
