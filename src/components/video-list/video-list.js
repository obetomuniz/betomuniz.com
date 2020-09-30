import React from "react"

import { VideoListItem } from "../"
import { Container } from "./ui"

const VideoList = ({ data }) => (
  <Container>
    {data.map(({ node: { vid, title, category } }, index) => (
      <VideoListItem
        key={`video-${index}`}
        vid={vid}
        title={title}
        category={category}
      />
    ))}
  </Container>
)

export default VideoList
