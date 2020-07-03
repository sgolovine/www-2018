import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
  return (
    <>
      <h1>/posts</h1>
      <PostContainer>
        {posts.map((item) => {
          return (
            <PostLink
              key={item.node.id}
              to={`/post/${item.node.frontmatter.slug}`}
            >
              {item.node.frontmatter.title}
            </PostLink>
          )
        })}
      </PostContainer>
    </>
  )
}

const PostContainer = styled.div``

const PostLink = styled(Link)`
  font-size: 24px;
`
