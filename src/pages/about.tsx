import React from 'react'
import { HTMLParagraph } from '~/components/Paragraph'
import { useAboutPageData } from '~/hooks/graphql/pages/useAboutPageData'

type PageProps = {
  title: string
  htmlContent: string
}

export const Page = (props: PageProps) => (
  <>
    <h1>{props.title}</h1>
    <HTMLParagraph>{props.htmlContent}</HTMLParagraph>
  </>
)

export default () => {
  const { title, htmlContent } = useAboutPageData()

  return <Page title={title} htmlContent={htmlContent} />
}
