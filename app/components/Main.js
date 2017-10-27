import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VisibleTrip from '../containers/VisibleTrip'
import PlaceFormContainer from '../containers/PlaceFormContainer'
import CreateTripForm from '../containers/CreateTripForm'

const Main = () => (
    <div className="content isOpen">
        <Switch>
            <Route exact path='/' render={() => (
                <div>
                    <PlaceFormContainer />
                    <VisibleTrip />
                </div>
            )} />
            <Route path='/trip/create' component={CreateTripForm}/>
            <Route path='/trip/view/:id' component={VisibleTrip}/>
        </Switch>
        

    </div>
)

export default Main;