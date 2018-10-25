import React from 'react'

import Layout from '../components/Layout'

const AboutPage = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Hire Me!</h1>
    </Layout>
  )
}

export default AboutPage
