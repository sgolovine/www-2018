import { graphql, useStaticQuery } from 'gatsby'

export type HeaderLink = {
  name: string
  href: string
  alt: string
  external: boolean
}

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

export const useHeaderLinks = (): HeaderLink[] => {
  const data = useStaticQuery(query)
  const { headerLinks } = data?.allMarkdownRemark?.nodes[0]?.frontmatter

  const filterProductionLinks = headerLinks.reduce(
    (
      acc: HeaderLink[],
      item: {
        linkName: string
        linkHref: string
        linkAlt: string
        linkType: 'internal' | 'external'
        enabled: 'true' | 'false'
      }
    ) => {
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
    },
    []
  )

  return filterProductionLinks
}
