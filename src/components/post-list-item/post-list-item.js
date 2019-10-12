import React from "react"
import { Link } from "gatsby"

import { Container, PostLink, PostCategory } from "./ui"

const PostListItem = ({ external, path, title, subtitle, category }) => {
  let customTitle = title

  if (subtitle) {
    customTitle = `${customTitle}: ${subtitle}`
  }

  return (
    <Container>
      <PostCategory
        color={`--DEFAULT_${category.toUpperCase()}_CATEGORY_COLOR`}
      >
        {category}
      </PostCategory>
      {external ? (
        <PostLink as="a" href={path} target="_blank" rel="noopener noreferrer">
          {customTitle}
        </PostLink>
      ) : (
        <PostLink as={Link} to={path}>
          {customTitle}
        </PostLink>
      )}
    </Container>
  )
}

export default PostListItem
