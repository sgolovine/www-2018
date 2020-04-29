/** This will fetch all posts */
export const pageDataQuery = `
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
