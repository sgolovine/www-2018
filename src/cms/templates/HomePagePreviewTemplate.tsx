import React from 'react'
import { Page } from '~/pages/index'

export default ({ entry }: { entry: any }) => {
  const title = entry.getIn(['data', 'title'])
  const htmlContent = entry.getIn(['data', 'pageContent'])

  return <Page title={title} htmlContent={htmlContent} />
}
