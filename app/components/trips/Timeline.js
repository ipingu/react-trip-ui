import React from "react";
import FontAwesome from "react-fontawesome";

const Timeline = (props) => (
    <div className="horizontal-timeline">
        <a href="#top">
            <FontAwesome name="home" />
        </a>
        {props.places && props.places.map(place => (
            <a key={place._id} href={"#" + place._id}>{place.name}</a>
        ))}
    </div>
)

export default Timeline;