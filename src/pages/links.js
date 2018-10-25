import React from 'react'

import Layout from '../components/Layout'

const LinksPage = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Links</h1>
    </Layout>
  )
}

export default LinksPage
