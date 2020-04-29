import { graphql, useStaticQuery } from 'gatsby'
import marked from 'marked'

export type ProjectItem = {
  projectName: string
  projectDesc: string
  projectLinks: LinkItem[]
}

export type LinkItem = {
  linkName: string
  linkHref: string
}

const pageDataQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/projects.md/g" } }
    ) {
      nodes {
        frontmatter {
          title
          pageContent
          projectList {
            projectName
            projectDesc
            projectLinks {
              linkHref
              linkName
            }
          }
        }
      }
    }
  }
`
export const useProjectPageData = (): {
  title: string
  htmlContent: string
  projectList: ProjectItem[]
} => {
  const pageData = useStaticQuery(pageDataQuery)
  const {
    title,
    pageContent,
    projectList,
  } = pageData?.allMarkdownRemark?.nodes[0]?.frontmatter

  const htmlContent = marked(pageContent)

  return {
    title,
    htmlContent,
    projectList,
  }
}
