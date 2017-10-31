import React from 'react'
import UserMenu from '../navigation/UserMenu'
import Menu from '../navigation/UserMenu'
import Main from './Main'

class Layout extends React.Component {

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <div className='flex-wrapper'>
                <UserMenu />
                <Main />
            </div>
        )
    }
}

export default Layout;