import React from "react";
import Trip from "./Trip";
import Diaporama from "../pictures/Diaporama";
import FontAwesome from "react-fontawesome";

class TripLayout extends React.Component {
    render() {
        return (
            <div className="trip-enriched">
                <div className="timeline">
                    <button>
                        <FontAwesome name="home" size="2x" />
                    </button>
                    <button>Tokyo</button>
                    <button>Shanghai</button>
                    <button>Hiroshima</button>
                </div>
                <Trip {...this.props} />
                <div className="metadata">
                    <Diaporama />
                </div>
            </div>
        )
    }
}


export default TripLayout;