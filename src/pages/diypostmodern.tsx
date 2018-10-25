import React from 'react'

import Layout from '../components/Layout'
import { TextContent } from '../components/elements'

interface Props {
  location: {
    pathname: string
  }
}

const DIYPostmodernPage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>
        DIY Postmodern <span>⌇</span>
      </h1>
      <TextContent>DIY baby!</TextContent>
    </Layout>
  )
}

export default DIYPostmodernPage
