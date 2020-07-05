import React from "react"
import { Link as GatsbyLink } from "gatsby"

import { Container, Link, Category } from "./ui"

const DropListItem = ({ external, path, title, subtitle, category }) => {
  let customTitle = title

  if (subtitle) {
    customTitle = `${customTitle}: ${subtitle}`
  }

  return (
    <Container>
      <Category color={`--DEFAULT_${category.toUpperCase()}_CATEGORY_COLOR`}>
        {category.replace("_", " ")}
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

export default DropListItem
