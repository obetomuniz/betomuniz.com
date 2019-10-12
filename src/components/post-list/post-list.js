import React from "react"

import { PostListItem } from "../"

const PostList = ({ data }) => {
  return (
    <ul>
      {data.map(
        (
          {
            node: {
              frontmatter: { external, path, title, subtitle, category },
            },
          },
          index
        ) => {
          return (
            <PostListItem
              key={`post-${index}`}
              external={external}
              path={path}
              title={title}
              subtitle={subtitle}
              category={category}
            />
          )
        }
      )}
    </ul>
  )
}

export default PostList
