import React from 'react'

import Layout from '../components/Layout'
import { TextContent } from '../components/elements'

interface Props {
  location: {
    pathname: string
  }
}

const WebAppsPage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Web Apps 👨‍💻</h1>
      <TextContent>Hey these are some web apps!</TextContent>
    </Layout>
  )
}

export default WebAppsPage
