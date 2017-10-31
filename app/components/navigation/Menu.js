import React from "react";
import { Link } from "react-router-dom";
import MenuLink from "./MenuLink";

class Menu extends React.Component {
  render() {
    const { trips, showMaximum } = this.props;
    let tripsLinks = null;
    if (trips.length > 0) {
      tripsLinks = trips.map((trip, index) => (
        <MenuLink
          key={trip._id}
          target={"/trip/view/" + trip._id}
          name={trip.name}
          hidden={index > showMaximum}
        />
      ));
    }

    if (trips.length > showMaximum) {
      tripsLinks.push(
        <MenuLink
          key={"see-all-trips"}
          target={"/trips/user"}
          name={"... see all trips"}
        />
      );
    }

    return (
      <div className="sidebar">
        <ul className="nav">
          <MenuLink target={"/trip/create"} name="New travel" />
          {tripsLinks}
        </ul>
      </div>
    );
  }
}

export default Menu;
