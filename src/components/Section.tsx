import React, { Fragment } from 'react'
import styled from 'styled-components'

import { smallScreen } from '../styles/screenSizes'

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 662px;

  .container--title {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin: 0 10px;
  }

  .title--section {
    font-weight: 500;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
    margin: 5px 0;
  }

  .container--sites {
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
  }

  @media (max-width: ${smallScreen}px) {
    .container--sites {
      grid-template-columns: 1fr;
    }
  }
`

interface Props {
  title?: string
}

const Section: React.SFC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <div className="container--title">
          <h2 className="title--section">{title}</h2>
        </div>
      )}
      <div className="container--sites">{children}</div>
    </Wrapper>
  )
}

export default Section
