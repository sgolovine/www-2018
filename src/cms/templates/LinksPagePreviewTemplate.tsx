import React from 'react'
import { Page } from '~/pages/links'
import { ContactInfo } from '~/hooks/graphql/useContactInfo'

export default ({ entry }: { entry: any }) => {
  const title = entry.getIn(['data', 'title'])
  const htmlContent = entry.getIn(['data', 'pageContent'])
  const links = entry.getIn(['data', 'links'])

  const previewContactInfo: ContactInfo = {
    email: {
      link: '#',
      username: 'email',
    },
    instagram: {
      link: '#',
      username: 'instagram',
    },
    dev: {
      link: '#',
      username: 'dev',
    },
    github: {
      link: '#',
      username: 'github',
    },
    linkedin: {
      link: '#',
      username: 'linkedin',
    },
    medium: {
      link: '#',
      username: 'medium',
    },
  }

  return (
    <Page
      title={title}
      htmlContent={htmlContent}
      contactInfo={previewContactInfo}
      links={links}
    />
  )
}
