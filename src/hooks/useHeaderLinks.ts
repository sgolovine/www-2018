import { useStaticQuery, graphql } from 'gatsby'

export const useHeaderLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      linksJson {
        headerLinks {
          github
          instagram
          linkedin
          twitter
        }
      }
    }
  `)

  return data.linksJson.headerLinks
}
