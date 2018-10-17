import React, { Fragment } from 'react'

import './Section.css'

const Section = ({ title, children }) => {
  return (
    <Fragment>
      <div className="container--title">
        <h2 className="title--section">{title}</h2>
      </div>
      <div className="container--sites">{children}</div>
    </Fragment>
  )
}

export default Section
