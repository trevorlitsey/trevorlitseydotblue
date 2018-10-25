import React from 'react'

import Layout from '../components/Layout'
import { TextContent } from '../components/elements'

interface Props {
  location: {
    pathname: string
  }
}

const LinksPage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Links 🔗</h1>
      <TextContent>links links links</TextContent>
    </Layout>
  )
}

export default LinksPage
