import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const date = new Date(frontmatter.date)

  return (
    <>
      <Header>{frontmatter.title}</Header>
      <Detail>Posted: {date.toDateString()}</Detail>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const pageQuery = graphql`
  query PostById($articleId: String!) {
    markdownRemark(id: { eq: $articleId }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Detail = styled.p`
  margin-top: 0;
  padding-top: 0;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`

const Header = styled.h1`
  padding-bottom: 0;
  margin-bottom: 0;
`
