import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { TextContent } from '../components/elements'
import Socials from '../components/Socials'

interface Props {
  location: {
    pathname: string
  }
}

const IndexPage: React.SFC<Props> = ({ location: { pathname } }) => (
  <Layout currentUrlPath={pathname}>
    <h1>
      Hello{' '}
      <small>
        <span>👋</span>
      </small>
    </h1>
    <TextContent>
      <p>Hi. My name is Trevor. Welcome.</p>
      <p>
        I'm a web developer and arts administrator living in Minneapolis, MN.
      </p>
      <p>
        Sometimes I make things that are <Link to="/blue">blue</Link>. Sometimes
        I make <Link to="/diypostmodern">shapes</Link>. Usually I'm making{' '}
        <Link to="/projects">web applications</Link>.
      </p>
      <p>Please stick around. I hope you enjoy. It's good to have you.</p>
    </TextContent>
    <Socials />
  </Layout>
)

export default IndexPage
