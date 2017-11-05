import React from "react";
import Trip from "./Trip";
import FontAwesome from "react-fontawesome";

class TripLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="horizontal-timeline">
                    <button>
                        <FontAwesome name="home" /></button>
                    <button>Tokyo</button>
                    <button>Myiajima</button>
                    <button>Tokyo Le retour</button>
                    <button>Shanghai</button>
                    <button>Hiroshima</button>
                </div>
                <Trip {...this.props} />
            </div>
        )
    }
}


export default TripLayout;