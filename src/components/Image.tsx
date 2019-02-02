import React, { Component } from 'react'

import placeholderSquare from '../images/whiteSquare.png';

interface Props {
  alt?: string
  label?: string
  src: string
}

interface State {
  src: string | null
}

export default class Image extends Component<Props, State> {
  public static defaultProps = {
    label: 'Label Me Please',
  }

  public state = {
    src: null,
  }

  public componentDidMount = () => {
    const { src } = this.props
    this.setState({ src })
  }

  public render() {
    const { alt, label } = this.props
    const { src } = this.state
    return (
      <img src={src || placeholderSquare} alt={alt || label} />
    )
  }
}
