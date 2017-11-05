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
        <div className="trip">
          <article className="summary">
            <h1>{this.props.trip.name}</h1>
            <p>{this.props.trip.summary}</p>
          </article>
          {places}
        </div>
      );
    } else {
      return <p>No trip</p>;
    }
  }
}


export default Trip;
