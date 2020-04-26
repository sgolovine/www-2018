import { graphql, useStaticQuery } from 'gatsby'
import marked from 'marked'

const pageDataQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/links.md/g" } }
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

export const useLinksPageData = () => {
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
