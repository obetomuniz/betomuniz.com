import React from "react"
import { Link as GatsbyLink } from "gatsby"

import getFlag from "../../services/getFlags"
import { Container, Link, Category } from "./ui"

const PostListItem = ({ external, path, title, subtitle, category, lang }) => {
  let customTitle = title

  if (subtitle) {
    customTitle = `${customTitle}: ${subtitle}`
  }

  return (
    <Container>
      <Category color={`--DEFAULT_${category.toUpperCase()}_CATEGORY_COLOR`}>
        {category.replace("_", " ")} <span>·</span> {getFlag(lang)}
      </Category>
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

export default PostListItem
