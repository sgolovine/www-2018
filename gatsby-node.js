/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const blogPostTemplate = path.resolve('./src/layout/BlogLayout.tsx')

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { fields: frontmatter___date }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw data.errors
  }

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach((post) => {
    actions.createPage({
      path: path.join('blog', post.node.fields.slug),
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}

/** This creates a "fields" object under allMarkdownRemark
 *  which holds the slug
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
