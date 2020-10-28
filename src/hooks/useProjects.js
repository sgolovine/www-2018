/**
 * query MyQuery {
  staticJson {
    projects {
      desc
      links {
        href
        name
      }
      name
    }
  }
}

 */

import { useStaticQuery, graphql } from 'gatsby'

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      staticJson {
        projects {
          name
          desc
          links {
            name
            href
          }
        }
      }
    }
  `)
  return data?.staticJson?.projects ?? []
}
