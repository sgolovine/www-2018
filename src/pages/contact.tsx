import React from 'react'
import { HTMLParagraph } from '~/components/Paragraph'
import { ContactForm } from '~/components/ContactForm'
import { useContactInfoPageData } from '~/hooks/graphql/pages/useContactInfoPageData'

type PageProps = {
  title: string
  htmlContent: string
}

export const Page = (props: PageProps) => (
  <>
    <h1>{props.title}</h1>
    <HTMLParagraph>{props.htmlContent}</HTMLParagraph>
    <ContactForm />
  </>
)

export default () => {
  const { title, htmlContent } = useContactInfoPageData()

  return <Page title={title} htmlContent={htmlContent} />
}
