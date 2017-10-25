import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const PlaceArticle = ({ key, place}) => (
  <article className="place-summary">
    <div className="header">
      <div className="calendar">
        <span className="day">{moment(place.start).days()}</span>
        <span className="month">{moment(place.start).format("MMM")}</span>
      </div>
      <h2>{place.name}</h2>
    </div>
    <p>{place.summary}</p>
  </article>
)

PlaceArticle.propTypes = 
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date)
  })

export default PlaceArticle;
