import React from "react";
import PropTypes from "prop-types";
import Place from "./Place";

class TripSummary extends React.Component {
  render() {
    const { trip } = this.props;

    return (
      <article className="summary">
        <h2>{trip.name}</h2>
        <p>{trip.summary}</p>
      </article>
    );
  }
}

export default TripSummary;
