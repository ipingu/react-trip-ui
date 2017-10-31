import React from "react";
import TripSummary from "./TripSummary";

class TripsList extends React.Component {
  render() {
    const { trips } = this.props;

    return (
      <ul className="nav">
        {trips.map(trip => <TripSummary trip={trip} />)}
      </ul>
    );
  }
}

export default TripsList;
