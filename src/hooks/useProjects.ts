import { useStaticQuery, graphql } from 'gatsby'
import { Projects } from '../model/projects'

export const useProjects = (): Projects => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson {
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
  return data?.projectsJson?.projects ?? []
}
