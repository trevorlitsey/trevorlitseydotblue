import React from 'react'
import { string } from 'prop-types'

import './Card.css'

const Card = ({ href, imgSrc, alt, label }) => {
  return (
    <div className="card">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={alt || label} />
        <div className="title--card">{label}</div>
      </a>
    </div>
  )
}

Card.propTypes = {
  href: string,
  src: string,
  alt: string,
  label: string,
}

Card.defaultProps = {
  href: '#',
  label: 'Label Me Please',
}

export default Card
