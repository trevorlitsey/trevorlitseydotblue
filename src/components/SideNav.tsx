import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import './SideNav.css'
import { elevation1 } from '../styles/elevation'

const links = [
  {
    to: '/',
    label: 'index',
  },
  {
    to: '/blue',
    label: 'blue',
  },
  {
    to: '/diypostmodern',
    label: 'diy postmodern',
  },
  {
    to: '/webapps',
    label: 'web apps',
  },
  {
    to: '/links',
    label: 'links',
  },
  {
    to: '/contact',
    label: 'contact',
  },
]

const Wrapper = styled.div`
  background: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15), 1px 1px 10px rgba(0, 0, 0, 0.05);
  height: 100vh;
  padding: 40px 40px 40px 10px;

  ul {
    margin: 0;
    padding: 0px;
    list-style: none;
    margin: auto;
  }

  ul li {
    padding: 10px;
    white-space: nowrap;
  }

  ul li span.pointer {
    color: rgba(0, 0, 0, 0);
    margin-right: 8px;
  }

  ul li span.pointer.on {
    color: inherit;
  }

  li > a {
    color: inherit;
    text-decoration: none;
  }

  li > a:visited {
    color: inherit;
  }

  @media screen and (max-width: 620px) {
    background: white;
    box-shadow: ${elevation1};
    height: auto;
    padding: 20px;

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 10px;
    }
  }
`

const SideNav = ({ currentUrlPath = '' }) => {
  return (
    <Wrapper>
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>
              <span className={`pointer ${currentUrlPath === to && 'on'}`}>
                →
              </span>{' '}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default SideNav
