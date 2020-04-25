import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import marked from 'marked'
import { HTMLParagraph } from '~/components/Paragraph'

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/index.md/g" } }
    ) {
      nodes {
        frontmatter {
          title
          pageContent
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(query)

  const { title, pageContent } = data?.allMarkdownRemark?.nodes[0]?.frontmatter

  const htmlContent = marked(pageContent)

  return (
    <>
      <h1>{title}</h1>
      <HTMLParagraph>{htmlContent}</HTMLParagraph>
    </>
  )
}
