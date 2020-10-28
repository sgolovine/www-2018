import { useStaticQuery, graphql } from 'gatsby'

export const useLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      staticJson {
        links {
          name
          href
        }
      }
    }
  `)
  return data?.staticJson?.links ?? []
}
