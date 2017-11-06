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
              <img src="http://idata.over-blog.com/0/58/67/94/belles-images/Rio/Christthe-Redeemer-in-Rio-001.jpg" />
              <h4>{trip.name}</h4>
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default TripsList;
