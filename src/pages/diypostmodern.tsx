import React from 'react'

import Layout from '../components/Layout'
import SitesList from '../components/SitesList'

import { diyPostmodern } from '../data/sites'

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
      <SitesList sites={diyPostmodern} />
    </Layout>
  )
}

export default DIYPostmodernPage
