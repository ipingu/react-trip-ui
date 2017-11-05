import React from "react";
import PropTypes from "prop-types";
import Place from "./Place";
import EditPlace from "./EditPlace";
import Diaporama from "../pictures/Diaporama";

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
                <Place key={place._id} place={place} />
              ))}
            </div>
          );

      return (
        <div>
          <div className="trip-enriched">
            <article className="trip-summary">
              <h1>{this.props.trip.name}</h1>
              <p>{this.props.trip.summary}</p>
            </article>
            <div className="metadata">
              <Diaporama />
            </div>
          </div>
          {places}
        </div>
      );
    } else {
      return <p>No trip</p>;
    }
  }
}


export default Trip;
