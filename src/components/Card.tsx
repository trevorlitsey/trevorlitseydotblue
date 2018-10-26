import React from 'react'
import styled from 'styled-components'
import { gray1 } from '../styles/colors'
import { elevation2 } from '../styles/elevation'

const Wrapper = styled.div`
  border-left: 0.2px solid ${gray1};
  box-shadow: ${elevation2};
  margin: 10px;

  a {
    text-decoration: none;
    font-size: 14px;
    color: black;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    height: 100%;
    background: white;
  }

  .title--card {
    margin-top: auto;
    line-height: 16px;
    margin: 10px;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    background: rgba(242, 242, 242, 1);
    width: 100%;
    min-width: 100%;
  }
`

interface Props {
  href: string
  placeholderImgSrc: string
  imgSrc: string
  alt?: string
  label: string
}

interface State {
  src: string | null
}

class Card extends React.Component<Props, State> {
  public static defaultProps = {
    href: '#',
    label: 'Label Me Please',
  }

  public state = {
    src: null,
  }

  public componentDidMount = () => {
    this.setState({ src: this.props.imgSrc })
  }

  public render() {
    const { href, alt, label, placeholderImgSrc } = this.props
    const { src } = this.state

    return (
      <Wrapper>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={src || placeholderImgSrc} alt={alt || label} />
          <div className="title--card">{label}</div>
        </a>
      </Wrapper>
    )
  }
}

export default Card
