import React from "react"

import { PostListItem } from "../"

const PostList = ({ data }) => {
  return (
    <ul>
      {data.map(
        (
          {
            node: {
              frontmatter: { external, path, title, subtitle },
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
            />
          )
        }
      )}
    </ul>
  )
}

export default PostList
