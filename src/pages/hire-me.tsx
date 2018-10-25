import React from 'react'

import Layout from '../components/Layout'

interface Props {
  location: {
    pathname: string
  }
}

const AboutPage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Hire Me!</h1>
    </Layout>
  )
}

export default AboutPage
