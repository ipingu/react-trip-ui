import React from 'react'
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const Header = () => (
    <header>
        <div className="actions primary">
            <Link to={"/feeds"}>
                <FontAwesome name="globe" size="2x"/>
            </Link>
            <Link to={"/trip/create"}>
                <FontAwesome name="map-marker" size="2x"/>
            </Link>
        </div>
        <div className="actions search">
            <input id="search" type="text" placeholder="Search for trips" />
        </div>
        <div className="actions user">
            <Link to={"/trips/user"}>My trips</Link>
            <Link to={""}>
                <FontAwesome name="user" size="2x"/>
            </Link>
        </div>
    </header>
)

export default Header;