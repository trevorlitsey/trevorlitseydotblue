import React from 'react'
import { Link } from 'gatsby'

import './SideNav.css'

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

const SideNav = ({ currentUrlPath }) => {
  return (
    <div className="sidenav--wrapper">
      <ul>
        {links.map(({ to, label }) => (
          <li>
            <Link to={to}>
              <span className={`pointer ${currentUrlPath === to && 'on'}`}>
                →
              </span>{' '}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideNav
