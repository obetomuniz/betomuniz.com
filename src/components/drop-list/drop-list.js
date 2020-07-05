import React from "react"

import { DropListItem } from "../"

const DropList = ({ data }) => {
  return (
    <ul>
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
          if (!drops) {
            return null
          }
          return (
            <DropListItem
              key={`drop-${index}`}
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
    </ul>
  )
}

export default DropList
