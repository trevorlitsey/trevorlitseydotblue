import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Project } from '../types'

import Layout from '../components/Layout'
import Image from '../components/Image'
import { TextContent } from '../components/elements'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 2fr;
  align-items: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.01);

  img {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.05);
  }

  a {
    text-decoration: none;
  }

  h2 {
    word-break: break-all;
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

  @media (max-width: 920px) {
    display: block;

    .content {
      padding-left: 10px;
    }
  }
`

const TechList: React.SFC<{
  tech: Array<{ name: string; description: string; link: string }>
}> = ({ tech }) => (
  <div className="tech-list">
    {tech &&
      tech.map(tech => (
        <a
          key={tech.name}
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
        <TextContent
          key={project.imgSrc}
          padding="15px"
          maxWidth={800}
          margin="20px auto"
        >
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
  pageContext: {
    emoji: string
    projects: Project[]
    title: string
  }
}

const WebAppsPage: React.SFC<WebAppsPageProps> = props => {
  const {
    location: { pathname },
    pageContext: { emoji, projects, title },
  } = props

  return (
    <Layout currentUrlPath={pathname}>
      <h1>
        {title} <span>{emoji}</span>
      </h1>
      <List projects={projects} />
    </Layout>
  )
}

export default WebAppsPage
