import React from "react"
import { Container } from "./ui"

const Video = ({ src }) => {
  return (
    <Container
      className="post-video"
      src={src}
      width="100%"
      controls
      autoplay
      loop
      playsinline
    ></Container>
  )
}

export default Video
