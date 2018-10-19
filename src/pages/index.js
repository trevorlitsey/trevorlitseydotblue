import React from 'react'

import Layout from '../components/Layout'
import Card from '../components/Card'
import Section from '../components/Section'
import Contact from '../components/Contact'

import {
  blues,
  diyPostmodern,
  thisIsNotASadBoy,
  freelance,
  projects,
} from '../data/sites'

const Sites = ({ sites }) =>
  sites.map((site, index) => <Card key={index} {...site} />)

const IndexPage = () => (
  <Layout>
    <Section title="blue">
      <Sites sites={blues} />
    </Section>
    <Section title="dyi postmodern .com">
      <Sites sites={diyPostmodern} />
    </Section>
    <Section title="this is not a sad boy .com">
      <Sites sites={thisIsNotASadBoy} />
    </Section>
    <Section title="freelance">
      <Sites sites={freelance} />
    </Section>
    <Section title="projects">
      <Sites sites={projects} />
    </Section>
    <Contact />
  </Layout>
)

export default IndexPage
