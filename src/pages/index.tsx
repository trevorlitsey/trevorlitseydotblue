import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { TextContent } from '../components/elements'

const Wrapper = styled.div`
  padding: 40px;
  h1 {
    text-align: center;
  }
  p {
    padding: 10px;
    margin: auto;
  }
`

interface Location {
  pathname: string
}

interface Props {
  location: Location
}

const IndexPage: React.SFC<Props> = ({ location: { pathname } }) => (
  <Layout currentUrlPath={pathname}>
    <Wrapper>
      <h1>
        Hello{' '}
        <small>
          <span>👋</span>
        </small>
      </h1>
      <TextContent>
        <p>
          My name is Trevor. Putting emojis on your website is very ~cool~ these
          days, so here we are.
        </p>
        <p>
          I don't really do social media, so this is where I put things that I'm
          working on, things I like, things I'm interested in, etc.
        </p>
        <p>
          Sometimes I make things that are <Link to="/blue">blue</Link>.
          Sometimes I make <Link to="/diypostmodern">shapes</Link>. Sometimes{' '}
          <Link to="/projects">web applications</Link>.
        </p>
        <p>Please stick around. It's good to have you.</p>
      </TextContent>
    </Wrapper>
  </Layout>
)

export default IndexPage
