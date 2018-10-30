import React from 'react'

import Layout from '../components/Layout'
import Socials from '../components/Socials'
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
        <p style={{ textAlign: 'center' }}>↓ ↓ ↓</p>
      </TextContent>
      <Socials />
    </Layout>
  )
}

export default ContactPage
