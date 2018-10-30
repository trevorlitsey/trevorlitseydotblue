import React from 'react'

import Layout from '../components/Layout'
import SitesList from '../components/SitesList'

import { blues } from '../data/sites'

interface Props {
  location: {
    pathname: string
  }
}

const BluePage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Blue 🔷</h1>
      <SitesList sites={blues} />
    </Layout>
  )
}

export default BluePage
