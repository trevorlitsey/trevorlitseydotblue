import React, { Fragment } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SitesList from '../components/SitesList'
import Image from '../components/Image'
import { TextContent } from '../components/elements'
import webapps from '../data/webapps'
import { Project } from '../types'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 2fr;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.01);

  img {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.05);
  }

  a {
    text-decoration: none;
  }

  .content {
    padding-left: 20px;
  }

  .tech-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .tech-list .pill {
    font-size: 14px;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
  }

  .tech-list > .pill:not(:last-child) {
    margin-right: 4px;
  }

  @media (max-width: 850px) {
    display: block;
  }
`

const TechList: React.SFC<{
  tech: Array<{ name: string; description: string; link: string }>
}> = ({ tech }) => (
  <div className="tech-list">
    {tech &&
      tech.map(tech => (
        <a
          className="pill"
          href={tech.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span key={tech.name}>{tech.name}</span>
        </a>
      ))}
  </div>
)

interface ListProps {
  projects: Project[]
}

const List: React.SFC<ListProps> = ({ projects }) => {
  return (
    <Fragment>
      {projects.map(project => (
        <TextContent key={project.imgSrc} maxWidth={800} margin="20px auto">
          <Wrapper>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.imgSrc}
                placeholder={project.placeholderImgSrc}
              />
            </a>
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <TechList tech={project.tech} />
            </div>
          </Wrapper>
        </TextContent>
      ))}
    </Fragment>
  )
}

interface WebAppsPageProps {
  location: {
    pathname: string
  }
}

const WebAppsPage: React.SFC<WebAppsPageProps> = ({
  location: { pathname },
}) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>Web Apps 👨‍💻</h1>
      <List projects={webapps} />
    </Layout>
  )
}

export default WebAppsPage
