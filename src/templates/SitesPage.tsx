import React from 'react'
import { Site } from '../types'

import Layout from '../components/Layout'
import SitesList from '../components/SitesList'

interface Props {
  location: {
    pathname: string
  }
  pageContext: {
    emoji: string
    sites: Site[]
    title: string
  }
}

const SitePage: React.SFC<Props> = props => {
  const {
    location: { pathname },
    pageContext: { emoji, sites, title },
  } = props

  return (
    <Layout currentUrlPath={pathname}>
      <h1>
        {title} <span>{emoji}</span>
      </h1>
      <SitesList sites={sites} />
    </Layout>
  )
}

export default SitePage
