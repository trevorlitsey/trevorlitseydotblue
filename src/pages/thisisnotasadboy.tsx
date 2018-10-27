import React from 'react'

import Layout from '../components/Layout'
import SitesList from '../components/SitesList'

import { thisIsNotASadBoy } from '../data/sites'

interface Props {
  location: {
    pathname: string
  }
}

const BluePage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>This is not a sad boy 😔</h1>
      <SitesList sites={thisIsNotASadBoy} />
    </Layout>
  )
}

export default BluePage
