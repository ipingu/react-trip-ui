import React from "react";
import TripSummary from "./TripSummary";
import { Link } from "react-router-dom";

class TripsList extends React.Component {
  render() {
    const { trips } = this.props;

    return (

      <ul className="block trip">
        {trips.map(trip =>
          <li key={trip._id}>
            <Link to={"/trip/view/" + trip._id}>
              {trip.name}
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default TripsList;
