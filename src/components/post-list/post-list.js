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
              frontmatter: { external, slug, title, subtitle, category, lang },
            },
          },
          index
        ) => {
          return (
            <PostListItem
              key={`post-${index}`}
              external={external}
              slug={`/blog/${slug}`}
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
