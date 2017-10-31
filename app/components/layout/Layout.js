import React from 'react'
import UserMenu from '../navigation/UserMenu'
import Menu from '../navigation/Menu'
import Main from './Main'

class Layout extends React.Component {

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <div className='flex-wrapper'>
                <Menu trips={this.props.trips}/>
                <Main />
            </div>
        )
    }
}

export default Layout;