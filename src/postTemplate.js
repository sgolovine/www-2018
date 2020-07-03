import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const pageQuery = graphql`
  query PostById($articleId: String!) {
    markdownRemark(id: { eq: $articleId }) {
      frontmatter {
        title
      }
      html
    }
  }
`
