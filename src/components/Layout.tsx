import React, { Fragment } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { smallScreen } from '../styles/screenSizes'

import SideNav from './SideNav'

import '../styles/globals.css'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  height: 100vh;

  @media (max-width: ${smallScreen}px) {
    display: block;
  }
`

export const Wrapper = styled.div`
  padding: 20px 40px;
  overflow: scroll;

  @media (max-width: ${smallScreen}px) {
  }
`

interface Props {
  currentUrlPath: string
}

interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout: React.SFC<Props> = ({ children, currentUrlPath, ...props }) => {
  const renderData: React.SFC<Data> = data => (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { charset: 'UTF-8' },
          {
            name: 'description',
            content: 'Personal website of Trevor Litsey',
          },
          { name: 'keywords', content: 'trevor litsey' },
          { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
          { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          { property: 'og:title', content: 'Trevor Litsey' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'http://trevorlitsey.com/' },
          { property: 'og:image', content: '/img/josef.png' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'trevorlitsey.com' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Container {...props}>
        <SideNav currentUrlPath={currentUrlPath} />
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  )
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={renderData}
    />
  )
}

export default Layout
