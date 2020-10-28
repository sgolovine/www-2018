import { useStaticQuery, graphql } from 'gatsby'

export const useLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      linksJson {
        links {
          name
          href
        }
      }
    }
  `)
  return data?.linksJson?.links ?? []
}
