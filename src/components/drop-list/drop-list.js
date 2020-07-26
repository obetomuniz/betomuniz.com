import React from "react"

import { DropListItem } from "../"
import { Container } from "./ui"

const DropList = ({ data }) => {
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
            <DropListItem
              key={`drop-${index}`}
              external={external}
              slug={`/drops/${slug}`}
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

export default DropList
