import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import MenuLink from './MenuLink'

class Menu extends React.Component {

    render() {
        let tripsLinks = null;
        if (this.props.trips.length > 0) {
            tripsLinks = this.props.trips.map((trip) => (
                <MenuLink key={trip._id} target={'/trip/view/' + trip._id} name={trip.name} />
            ));
        }

        return (
            <div className="sidebar">
                <ul className="nav">
                    <MenuLink target={'/trip/feeds'} name="Latest trips" />
                    <MenuLink target={'/trip/create'} name="New travel" />
                    {tripsLinks}
                    <MenuLink target={'/trip/montreal-id'} name="... more trips" />
                </ul>
            </div>
        )
    }
}

export default Menu;