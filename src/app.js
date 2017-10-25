import React from 'react';
import VisibleTrip from './containers/VisibleTrip';
import PlaceFormContainer from './containers/PlaceFormContainer';

class App extends React.Component {

   render() {
      return (
        <div>
          <PlaceFormContainer />
          <VisibleTrip />
        </div>
      );
   }
}

export default App;
