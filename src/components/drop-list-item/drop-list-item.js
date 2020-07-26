import React from "react"
import { Link as GatsbyLink } from "gatsby"

import { Container, Link, Category } from "./ui"

const DropListItem = ({ external, slug, title, subtitle, category }) => {
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
        <Link as="a" href={slug} target="_blank" rel="noopener noreferrer">
          {customTitle}
        </Link>
      ) : (
        <Link as={GatsbyLink} to={slug}>
          {customTitle}
        </Link>
      )}
    </Container>
  )
}

export default DropListItem
