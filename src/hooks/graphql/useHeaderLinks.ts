import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/components/header.md/g" } }
    ) {
      nodes {
        frontmatter {
          headerLinks {
            linkType
            enabled
            linkName
            linkHref
            linkAlt
          }
        }
      }
    }
  }
`

export const useHeaderLinks = (): {
  name: string
  href: string
  alt: string
  external: boolean
}[] => {
  const data = useStaticQuery(query)
  const { headerLinks } = data?.allMarkdownRemark?.nodes[0]?.frontmatter
  // console.log(headerLinks)

  const filterProductionLinks = headerLinks.reduce((acc, item) => {
    if (/^true$/.test(item.enabled)) {
      return [
        ...acc,
        {
          name: item.linkName,
          href: item.linkHref,
          alt: item.linkAlt,
          external: /^external$/.test(item.linkType),
        },
      ]
    }
    return acc
  }, [])

  return filterProductionLinks
}
