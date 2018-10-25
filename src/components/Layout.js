import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import SideNav from './SideNav'

import './Layout.css'

const Layout = ({ children, currentUrlPath, ...props }) => (
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
    render={data => (
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
        <div className="layout" {...props}>
          <SideNav currentUrlPath={currentUrlPath} />
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
