import React from 'react'

import Layout from '../components/Layout'
import { TextContent } from '../components/elements'

interface Props {
  location: {
    pathname: string
  }
}

const ContactPage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Contact ☎️</h1>
      <TextContent>
        <p>get in touch, plz</p>
      </TextContent>
    </Layout>
  )
}

export default ContactPage
