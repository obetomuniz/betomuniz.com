import React from "react"
import { Link as GatsbyLink } from "gatsby"

import { Container, Link } from "./ui"

const PostPreviewListItem = ({ external, path, title, subtitle, category }) => {
  let customTitle = title

  if (subtitle) {
    customTitle = `${customTitle}: ${subtitle}`
  }

  return (
    <Container>
      {external ? (
        <Link as="a" href={path} target="_blank" rel="noopener noreferrer">
          {customTitle}
        </Link>
      ) : (
        <Link as={GatsbyLink} to={path}>
          {customTitle}
        </Link>
      )}
    </Container>
  )
}

export default PostPreviewListItem
