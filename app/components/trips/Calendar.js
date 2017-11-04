import React from 'react'
import moment from 'moment'

const Calendar = (date) => (
      <div className="calendar">
        <span className="day">{moment(date).days()}</span>
        <span className="clean">
          <span className="month">{moment(date).format("MMM").toLowerCase()}</span>
          <span>{moment(date).format("YYYY").toLowerCase()}</span>
        </span>
      </div>
)

export default Calendar;