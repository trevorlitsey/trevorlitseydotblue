import React from 'react'

import Layout from '../components/Layout'

const ContactPage = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>DIY Postmodern</h1>
    </Layout>
  )
}

export default ContactPage
