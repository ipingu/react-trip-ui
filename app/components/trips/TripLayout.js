import React from "react";
import Trip from "./Trip";
import Diaporama from "../pictures/Diaporama"

class TripLayout extends React.Component {
  render() {
    return (
        <div className="flex split">
            <Trip {...this.props}/>
            <div>
                <Diaporama />
            </div>
        </div>
    )
  }
}


export default TripLayout;