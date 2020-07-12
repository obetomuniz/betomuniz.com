import React from "react"

import { PostListItem } from "../"
import { Container } from "./ui"

const PostList = ({ data }) => {
  return (
    <Container>
      {data.map(
        (
          {
            node: {
              frontmatter: {
                external,
                path,
                title,
                subtitle,
                category,
                lang,
                drops,
              },
            },
          },
          index
        ) => {
          if (drops) {
            return null
          }

          return (
            <PostListItem
              key={`post-${index}`}
              external={external}
              path={path}
              title={title}
              subtitle={subtitle}
              category={category}
              lang={lang}
            />
          )
        }
      )}
    </Container>
  )
}

export default PostList
