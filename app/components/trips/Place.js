import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Place = ({ key, place}) => (
  <article className="place-summary">
    <div className="header">
      <div className="calendar">
        <span className="day">{moment(place.start).days()}</span>
        <span className="clean">
          <span className="month">{moment(place.start).format("MMM").toLowerCase()}</span>
          <span>{moment(place.start).format("YYYY").toLowerCase()}</span>
        </span>
      </div>
      <h2>{place.name}</h2>
    </div>
    <p>{place.summary}</p>
  </article>
)

Place.propTypes = 
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  })

export default Place;
