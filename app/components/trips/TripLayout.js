import React from "react";
import Trip from "./Trip";
import Timeline from "./Timeline";

class TripLayout extends React.Component {
    render() {
        return (
            <div>
                <Timeline {...this.props.trip}/>
                <div className="content">
                    <Trip {...this.props} />
                </div>
            </div>
        )
    }
}


export default TripLayout;