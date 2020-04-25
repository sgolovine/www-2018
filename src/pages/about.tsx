import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import marked from 'marked'

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/about.md/g" } }
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
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  )
}
