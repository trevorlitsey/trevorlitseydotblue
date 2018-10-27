import React, { Component } from 'react'

// tslint:disable-next-line
const placeholderSquare = require('../images/whiteSquare.png')

interface Props {
  alt?: string
  label: string
  placeholder: string
  src: string
}

interface State {
  placeholder: string | null
  src: string | null
}

export default class Image extends Component<Props, State> {
  public static defaultProps = {
    label: 'Label Me Please',
  }

  public state = {
    placeholder: null,
    src: null,
  }

  public componentDidMount = () => {
    const { placeholder, src } = this.props
    this.setState({ placeholder, src })
  }

  public render() {
    const { placeholder, alt, label } = this.props
    const { src } = this.state
    return (
      <img src={src || placeholder || placeholderSquare} alt={alt || label} />
    )
  }
}
