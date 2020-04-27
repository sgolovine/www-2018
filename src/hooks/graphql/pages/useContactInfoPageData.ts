import { graphql, useStaticQuery } from 'gatsby'
import marked from 'marked'

const pageDataQuery = graphql`
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

export const useContactInfoPageData = () => {
  const pageData = useStaticQuery(pageDataQuery)
  const {
    title,
    topContent,
  } = pageData?.allMarkdownRemark?.nodes[0]?.frontmatter

  const htmlContent = marked(topContent)

  return {
    title,
    htmlContent,
  }
}
