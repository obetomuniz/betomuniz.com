import React from "react"
import { Link } from "gatsby"

import { Container, PostLink } from "./ui"

const PostListItem = ({ external, path, title, subtitle }) => {
  let customTitle = title

  if (subtitle) {
    customTitle = `${customTitle}: ${subtitle}`
  }

  return (
    <Container>
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
