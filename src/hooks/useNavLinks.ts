import { useStaticQuery, graphql } from 'gatsby'
import { NavLinks } from '~/model/navLinks'

export const useNavLinks = (): NavLinks => {
  const data = useStaticQuery(graphql`
    query {
      navigationJson {
        navLinks {
          alt
          enabled
          name
          route
        }
      }
    }
  `)
  return data?.navigationJson?.navLinks ?? []
}
