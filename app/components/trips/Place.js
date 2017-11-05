import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Calendar from './Calendar'
import Diaporama from "../pictures/Diaporama";

const Place = (props) => (
  <div className="place-enriched">
    <article className="place-summary">
      <div className="header">
        <Calendar date={props.place.start} />
        <h2>{props.place.name}</h2>
      </div>
      <p>{props.place.summary}</p>
    </article>
    <div className="metadata">
      <Diaporama />
    </div>
  </div>
)

export default Place;
