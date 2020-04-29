/** This will fetch all posts */
import { graphql } from 'gatsby'

export const pageDataQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: frontmatter___date }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            description
            tags
            title
          }
          html
        }
      }
    }
  }
`
