import React from "react"

import { PostPreviewListItem } from "../../components"
import { Container, Category } from "./ui"

const PostPreviewList = ({ category, data }) => {
  return (
    <Container>
      <Category color={`--DEFAULT_${category.toUpperCase()}_CATEGORY_COLOR`}>
        {category.replace("_", " ")}
      </Category>
      <ul>
        {data
          .slice(0, 3)
          .map(({ external, path, title, subtitle, category }, index) => {
            return (
              <PostPreviewListItem
                key={`post-preview-item-${index}`}
                external={external}
                path={path}
                title={title}
                subtitle={subtitle}
                category={category}
              />
            )
          })}
      </ul>
    </Container>
  )
}

export default PostPreviewList
