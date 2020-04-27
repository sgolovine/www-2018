import { graphql, useStaticQuery } from 'gatsby'

const contactInfoQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/components/contact-info.md/g" } }
    ) {
      nodes {
        frontmatter {
          email
          instagram
          dev
          github
          linkedin
          medium
        }
      }
    }
  }
`

export const useContactInfo = () => {
  const contactData = useStaticQuery(contactInfoQuery)
  const {
    email,
    instagram,
    dev,
    github,
    linkedin,
    medium,
  } = contactData?.allMarkdownRemark?.nodes[0].frontmatter

  return {
    email: {
      link: `mailto:${email}`,
      username: email,
    },
    instagram: {
      link: `https://instagram.com/${instagram}`,
      username: instagram,
    },
    dev: {
      link: `https://dev.to/${dev}`,
      username: dev,
    },
    github: {
      link: `https://github.com/${github}`,
      username: github,
    },
    linkedin: {
      link: `https://linkedin.com/in/${linkedin}`,
      username: linkedin,
    },
    medium: {
      link: `https://medium.com/@${medium}`,
      username: medium,
    },
  }
}
