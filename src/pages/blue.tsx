import React from 'react'

import Layout from '../components/Layout'
import { TextContent } from '../components/elements'

interface Props {
  location: {
    pathname: string
  }
}

const BluePage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Blue 🔷</h1>
      <TextContent>
        <p>here are some things that are blue!</p>
      </TextContent>
    </Layout>
  )
}

export default BluePage
