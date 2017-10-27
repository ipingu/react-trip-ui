import React from 'react'
import Menu from './navigation/Menu'
import Main from './Main'

const Layout = () => (
    <div className='flex-wrapper'>
        <Menu />
        <Main />
    </div>
)

export default Layout;