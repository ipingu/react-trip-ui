import React from 'react'

var FontAwesome = require('react-fontawesome')

const Menu = () => (
    <div className="sidebar">
        <ul className="nav">
            <li><a><FontAwesome name='rss'/>&nbsp;&nbsp;Latest trips</a></li>
            <li><a><FontAwesome name='road'/>&nbsp;&nbsp;Current trip</a></li>
            <li><a><FontAwesome name='tag'/>&nbsp;&nbsp;Chicago</a></li>
            <li><a><FontAwesome name='tag'/>&nbsp;&nbsp;Montreal</a></li>
            <li><a><FontAwesome name='tag'/>&nbsp;&nbsp;Paris</a></li>
            <li><a><FontAwesome name='tag'/>&nbsp;&nbsp;Costa Rica</a></li>
        </ul>
    </div>
)

export default Menu;