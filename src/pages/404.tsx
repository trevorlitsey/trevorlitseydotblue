import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Wrapper = styled.div`
  font-size: 12vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation-direction: alternate-reverse;

  .container {
    text-align: center;
    animation: rotate 1.8s linear infinite;
  }

  .container span {
    font-weight: 350;
  }

  .container h1 {
    margin: 0;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

interface Props {
  location: {
    pathname: string
  }
}

const NotFoundPage: React.SFC<Props> = ({ location: { pathname } }) => (
  <Layout currentUrlPath={pathname}>
    <Wrapper>
      <div className="container">
        <h1>
          4<span>☹</span>4
        </h1>
      </div>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
