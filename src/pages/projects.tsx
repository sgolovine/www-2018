import React from 'react'
import styled from 'styled-components'
import { HTMLParagraph } from '~/components/Paragraph'
import {
  useProjectPageData,
  ProjectItem,
  LinkItem,
} from '~/hooks/graphql/pages/useProjectsPageData'

export default () => {
  const { title, htmlContent, projectList } = useProjectPageData()

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
      <HTMLParagraph>{htmlContent}</HTMLParagraph>
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
