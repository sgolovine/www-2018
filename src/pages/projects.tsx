import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { HTMLParagraph } from '~/components/Paragraph'

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/projects.md/g" } }
    ) {
      nodes {
        frontmatter {
          title
          topContent
          projectList {
            projectName
            projectDesc
            projectLinks {
              linkHref
              linkName
            }
          }
        }
      }
    }
  }
`

type ProjectItem = {
  projectName: string
  projectDesc: string
  projectLinks: LinkItem[]
}

type LinkItem = {
  linkName: string
  linkHref: string
}

export default () => {
  const data = useStaticQuery(query)
  const {
    title,
    topContent,
    projectList,
  } = data.allMarkdownRemark.nodes[0].frontmatter

  const renderList = () =>
    projectList.map((item: ProjectItem, index: number) => {
      return (
        <ProjectListItem key={index}>
          <h3>{item.projectName}</h3>
          <p>{item.projectDesc}</p>
          <>
            {item.projectLinks.map(
              (projectLinkItem: LinkItem, index: number) => {
                return (
                  <ProjectLink
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projectLinkItem.linkHref}
                  >
                    {projectLinkItem.linkName}
                  </ProjectLink>
                )
              }
            )}
          </>
        </ProjectListItem>
      )
    })

  return (
    <>
      <h1>{title}</h1>
      <HTMLParagraph>{topContent}</HTMLParagraph>
      <ProjectList>{renderList()}</ProjectList>
    </>
  )
}

const ProjectList = styled.div`
  margin-top: 3.5em;
`
const ProjectListItem = styled.div`
  margin-top: 75px;
`

const ProjectLink = styled.a`
  margin-right: 0.75em;
`
