import React from 'react'
import { useBlogPageData } from '~/hooks/graphql/pages/useBlogPageData'
import { Link } from 'gatsby'

export default () => {
  const data = useBlogPageData()

  const blogPosts = data.map((post) => {
    return (
      <Link
        key={post.slug}
        to={`/blog/${post.slug}`}
      >{`${post.date} - ${post.title}`}</Link>
    )
  })

  return (
    <>
      <h1>Blog</h1>
      {blogPosts}
    </>
  )
}
