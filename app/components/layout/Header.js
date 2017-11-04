import React from 'react'
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <input type="text" placeholder="Going somewhere ?" />
        
        <Link to={"/trips/user"}>My trips</Link>
        <Link to={"/trip/create"}>New trip</Link>
    </header>
)

export default Header;