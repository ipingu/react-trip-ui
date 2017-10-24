import React from 'react';
import PropTypes from 'prop-types'

const PlaceForm = (props) => {
    let name
    let summary

    return (
      <section className="form">
        <h4>Where are you ?</h4>
          <input type="text" placeholder="Location" ref={node => {name = node}} />
          <textarea ref={node => {summary = node}}/>
          <input type="submit" id="postStory" value="Publish" onClick={e => {
            props.addPlace(name.value, summary.value)
          }}/>
      </section>
  )
}

export default PlaceForm
