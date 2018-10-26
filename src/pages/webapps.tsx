import React from 'react'

import Layout from '../components/Layout'
import SitesList from '../components/SitesList'

import { projects } from '../data/sites'

interface Props {
  location: {
    pathname: string
  }
}

const WebAppsPage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Web Apps 👨‍💻</h1>
      <SitesList sites={projects} />
    </Layout>
  )
}

export default WebAppsPage
