import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import MenuLink from './MenuLink'

const Menu = () => (
    <div className="sidebar">
        <ul className="nav">
            <MenuLink target={'/trip/feeds'} name="Latest trips" />
            <MenuLink target={'/trip/create'} name="New travel" />
            <MenuLink target={'/trip/view/chicago-id'} name="Chicago" />
            <MenuLink target={'/trip/view/montreal-id'} name="Montreal" />
            <MenuLink target={'/trip/montreal-id'} name="... more trips" />
        </ul>
    </div>
)

export default Menu;