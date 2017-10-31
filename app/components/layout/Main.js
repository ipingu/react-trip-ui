import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ActiveTrip from '../trips/ActiveTrip'
import EditTrip from '../trips/EditTrip'
import UserTripsList from '../trips/UserTripsList'

const Main = () => (
    <div className="content isOpen">
        <Switch>
            <Route exact path='/' render={() => (
                <div>
                    <ActiveTrip />
                </div>
            )} />
            <Route path='/trip/create' component={EditTrip}/>
            <Route path='/trips/user' component={UserTripsList}/>
            <Route path='/trip/view/:id' component={ActiveTrip}/>
        </Switch>
        

    </div>
)

export default Main;