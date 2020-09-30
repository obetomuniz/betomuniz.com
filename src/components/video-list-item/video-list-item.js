import React from "react"

import { Container, Category, Image } from "./ui"

const VideoListItem = ({ vid, title, category }) => (
  <Container>
    <Category color={`--DEFAULT_${category.toUpperCase()}_CATEGORY_COLOR`}>
      {category.replace("_", " ")}
    </Category>
    <a
      as="a"
      href={`https://www.youtube.com/watch?v=${vid}`}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <Image
        width="550"
        height="309"
        alt={`Capa do Vídeo "${title}"`}
        src={`https://img.youtube.com/vi/${vid}/maxresdefault.jpg`}
      />
    </a>
  </Container>
)

export default VideoListItem
