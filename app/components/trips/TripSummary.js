import React from "react";
import PropTypes from "prop-types";
import Place from "./Place";
import { Link } from "react-router-dom"

class TripSummary extends React.Component {
  render() {
    const { trip } = this.props;

    return (
      <article className="summary">
        <Link to={"/trip/view/" + trip._id}>
          <h2>{trip.name}</h2>
        </Link>
        <p>{trip.summary}</p>
      </article>
    );
  }
}

export default TripSummary;
