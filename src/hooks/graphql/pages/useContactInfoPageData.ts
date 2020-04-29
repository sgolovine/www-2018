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
          pageContent
        }
      }
    }
  }
`

export const useContactInfoPageData = (): {
  title: string
  htmlContent: string
} => {
  const pageData = useStaticQuery(pageDataQuery)
  const {
    title,
    pageContent,
  } = pageData?.allMarkdownRemark?.nodes[0]?.frontmatter

  const htmlContent = marked(pageContent)

  return {
    title,
    htmlContent,
  }
}
