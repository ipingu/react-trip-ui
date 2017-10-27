import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const MenuLink = (props) => (
    <li><Link to={props.target}><FontAwesome name='tag'/>&nbsp;&nbsp;{props.name}</Link></li>
)

export default MenuLink;