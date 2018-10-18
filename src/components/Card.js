import React from 'react'
import { string } from 'prop-types'

import './Card.css'

class Card extends React.Component {
  state = {
    src: null,
  }

  componentDidMount = () => {
    this.setState({ src: this.props.imgSrc })
  }

  render() {
    const { href, alt, label, placeholderImgSrc } = this.props
    const { src } = this.state

    return (
      <div className="card">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={src || placeholderImgSrc} alt={alt || label} />
          <div className="title--card">{label}</div>
        </a>
      </div>
    )
  }
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
