import { graphql, useStaticQuery } from 'gatsby'

type Node = {
  frontmatter: {
    title: string
    date: string
  }
  fields: {
    slug: string
  }
}

const pageDataQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`

export const useBlogPageData = (): {
  title: string
  date: string
  slug: string
}[] => {
  const pageData = useStaticQuery(pageDataQuery)
  const { nodes } = pageData.allMarkdownRemark

  const postData = nodes.map((node: Node) => {
    return {
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      slug: node.fields.slug,
    }
  })

  return postData
}
