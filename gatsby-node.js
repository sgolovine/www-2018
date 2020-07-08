const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const query = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
            html
          }
        }
      }
    }
  `)

  if (query.errors) {
    throw query.errors
  }

  const posts = query.data.allMarkdownRemark.edges

  const template = path.resolve(__dirname, './src/postTemplate.js')

  posts.forEach((post) => {
    createPage({
      path: `/post/${post.node.frontmatter.slug}`,
      component: template,
      context: {
        articleId: post.node.id,
      },
    })
  })
}
