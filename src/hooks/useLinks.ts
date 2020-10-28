import { useStaticQuery, graphql } from 'gatsby'
import { Links } from '../model/links'

export const useLinks = (): Links => {
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
