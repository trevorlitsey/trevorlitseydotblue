import React from 'react'

import Layout from '../components/Layout'
import Card from '../components/Card'
import Section from '../components/Section'
import Contact from '../components/Contact'

import { blues } from '../data/sites'

const IndexPage = () => (
  <Layout>
    <Section title="blue">
      {blues.map((site, index) => (
        <Card key={index} {...site} />
      ))}
    </Section>
    <Contact />
  </Layout>
)

export default IndexPage
