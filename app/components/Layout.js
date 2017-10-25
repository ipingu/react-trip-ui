import React from 'react'
import VisibleTrip from '../containers/VisibleTrip';
import PlaceFormContainer from '../containers/PlaceFormContainer';
import Menu from './Menu'

const Layout = () => (
    <div className='flex-wrapper'>
        <Menu />

        <div className="content isOpen">
            <PlaceFormContainer />
            <VisibleTrip />
        </div>
    </div>
)

export default Layout;