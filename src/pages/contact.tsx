import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import marked from 'marked'
import { HTMLParagraph } from '~/components/Paragraph'
import { ContactForm } from '~/components/ContactForm'

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/contact.md/g" } }
    ) {
      nodes {
        frontmatter {
          title
          topContent
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(query)

  const { title, topContent } = data?.allMarkdownRemark?.nodes[0]?.frontmatter

  const htmlContent = marked(topContent)

  return (
    <>
      <h1>{title}</h1>
      <HTMLParagraph>{htmlContent}</HTMLParagraph>
      <ContactForm />
    </>
  )
}
