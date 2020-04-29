import { graphql, useStaticQuery } from 'gatsby'
import marked from 'marked'
import { LinkItem } from '~/types/links'

const pageDataQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/links.md/g" } }
    ) {
      nodes {
        frontmatter {
          title
          pageContent
          links {
            linkName
            linkHref
          }
        }
      }
    }
  }
`

export const useLinksPageData = (): {
  title: string
  htmlContent: string
  links: LinkItem[]
} => {
  const pageData = useStaticQuery(pageDataQuery)
  const {
    title,
    pageContent,
    links,
  } = pageData?.allMarkdownRemark?.nodes[0]?.frontmatter

  const htmlContent = marked(pageContent)

  return {
    title,
    htmlContent,
    links,
  }
}
