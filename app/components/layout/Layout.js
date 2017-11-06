import React from 'react'
import Main from './Main'
import Header from './Header'

class Layout extends React.Component {

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <div>
                <Header />

                <div>
                    <Main />
                </div>
            </div>
        )
    }
}

export default Layout;