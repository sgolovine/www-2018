import React from 'react'
import { Page } from '~/pages/projects'

export default ({ entry }: { entry: any }) => {
  const title = entry.getIn(['data', 'title'])
  const htmlContent = entry.getIn(['data', 'pageContent'])
  const projectList = entry.getIn(['data', 'projectList'])

  return (
    <Page title={title} htmlContent={htmlContent} projectList={projectList} />
  )
}
