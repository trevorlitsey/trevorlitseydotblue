import React, { Fragment } from 'react'
import styled from 'styled-components'

import { TextContent } from '../components/elements'
import Layout from '../components/Layout'
import { gray2 } from '../styles/colors'

const artLinks = [
  {
    href: 'https://albersfoundation.org/',
    label: 'Anni and Joseph Albers',
  },
  {
    href: 'https://massmoca.org/sol-lewitt/',
    label: 'Sol Lewitt',
  },
  {
    href:
      'https://collections.artsmia.org/art/61506/soleil-rouge-maritime-max-ernst',
    label: 'Max Ernst',
  },
  {
    href: 'https://collections.lacma.org/node/155378',
    label: 'Agnes Martin',
  },
  {
    href: 'http://recodeproject.com/',
    label: 'The ReCode Project',
  },
]

const peopleLinks = [
  {
    href: 'http://mitch.digital',
    label: 'mitch',
  },
  {
    href: 'http://plays.gratis',
    label: 'noah',
  },
]

const musicLinks = [
  {
    href: 'https://roomfulofteeth.org',
    label: 'Roomful of Teeth',
  },
]

interface LinkListProps {
  links: Array<{
    label: string
    href: string
  }>
}

// typescript wines about returning an array of elements :(
const LinkList: React.SFC<LinkListProps> = ({ links }) => {
  return (
    <Fragment>
      {links.map(({ label, href }) => (
        <p>
          <strong style={{ paddingBottom: 10 }}>{label}</strong>: <br />
          <a
            className="no-underline"
            href={href}
            target="__blank"
            rel="noopener"
            style={{ wordBreak: 'break-all' }}
          >
            {href}
          </a>
        </p>
      ))}
    </Fragment>
  )
}

const LinksTitle = styled.p`
  font-size: 16px;
  border-bottom: 1px solid ${gray2};
`

interface LinksPageProps {
  location: {
    pathname: string
  }
}

const LinksPage: React.SFC<LinksPageProps> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Links 🔗</h1>
      <TextContent>
        <p style={{ textAlign: 'center' }}>
          <i>
            a growing list of friends and interests, in no particular order, in
            the spirit of a simpler time
          </i>
        </p>
        <LinksTitle>Art:</LinksTitle>
        <LinkList links={artLinks} />
        <LinksTitle>People:</LinksTitle>
        <LinkList links={peopleLinks} />
        <LinksTitle>Music:</LinksTitle>
        <LinkList links={musicLinks} />
      </TextContent>
    </Layout>
  )
}

export default LinksPage
