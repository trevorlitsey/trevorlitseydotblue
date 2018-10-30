import React from 'react'
import styled from 'styled-components'

import Icons from './Icons'

import { elevation1 } from '../styles/elevation'

const Wrapper = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${elevation1};
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  padding-top: 12px;
  padding-bottom: 10px;
  text-align: center;
  svg {
    height: 20px;
    padding: 0 10px;
  }
`

const Socials = () => (
  <Wrapper>
    <a href="mailto:trevorlitsey@gmail.com">
      <Icons.GMail />
    </a>
    <a
      href="https://github.com/trevorlitsey/trevorlitsey.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.GitHub />
    </a>
    <a
      href="https://www.instagram.com/__trevbot___/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.Instagram />
    </a>
  </Wrapper>
)

export default Socials
