import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import marked from 'marked'
import { HTMLParagraph } from '~/components/Paragraph'

const pageDataQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/links.md/g" } }
    ) {
      nodes {
        frontmatter {
          title
          topContent
        }
      }
    }
  }
`

// const contactInfoQuery = graphql`
//   query {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/components/contact-info.md/g" } }
//     ) {
//       nodes {
//         frontmatter {
//           email
//           instagram
//           dev
//           github
//           linkedin
//           medium
//           resume
//         }
//       }
//     }
//   }
// `

export default () => {
  const pageData = useStaticQuery(pageDataQuery)
  // const contactData = useStaticQuery(contactInfoQuery)

  const {
    title,
    topContent,
  } = pageData?.allMarkdownRemark?.nodes[0]?.frontmatter

  // const {
  //   email,
  //   instagram,
  //   dev,
  //   github,
  //   linkedin,
  //   medium,
  //   resume,
  // } = contactData?.allMarkdownRemark?.nodes[0].frontmatter

  const htmlContent = marked(topContent)

  return (
    <>
      <h1>{title}</h1>
      <HTMLParagraph>{htmlContent}</HTMLParagraph>
    </>
  )
}
