import React from 'react'

import Layout from '../components/Layout'

const ProjectsPage = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Web Apps</h1>
    </Layout>
  )
}

export default ProjectsPage
