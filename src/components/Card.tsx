import React from 'react'
import styled from 'styled-components'

import Image from './Image'
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
    letter-spacing: 1px;
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

const Card: React.SFC<Props> = ({
  href,
  alt,
  label,
  placeholderImgSrc,
  imgSrc,
}) => (
  <Wrapper>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        placeholder={placeholderImgSrc}
        src={imgSrc}
        alt={alt}
        label={label}
      />
      <div className="title--card">{label}</div>
    </a>
  </Wrapper>
)

Card.defaultProps = {
  href: '#',
}

export default Card
