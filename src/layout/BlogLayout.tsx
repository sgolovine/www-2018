import React from 'react'
import { graphql } from 'gatsby'
import { HTMLParagraph } from '~/components/Paragraph'

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
      }
      html: string
    }
  }
  pageContext: {
    slug: string
  }
}

const BlogLayout = (props: Props) => {
  const { frontmatter, html } = props.data.markdownRemark

  console.log(frontmatter, html)

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <HTMLParagraph>{html}</HTMLParagraph>
    </>
  )
}

export const pageQuery = graphql`
  query GetPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
      }
      html
    }
  }
`

export default BlogLayout
