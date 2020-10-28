import { useStaticQuery, graphql } from 'gatsby'

export const useProjects = () => {
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
