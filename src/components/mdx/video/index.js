import React from "react"
import { A } from "../"
import { Wrapper, Container, Caption } from "./ui"

const Video = ({ src, author, authorURL }) => {
  return (
    <Wrapper>
      <Container
        src={src}
        width="100%"
        controls
        autoplay
        loop
        playsinline
      ></Container>
      {author && authorURL && (
        <Caption>
          Fonte: <A href={authorURL}>{author}</A>
        </Caption>
      )}
    </Wrapper>
  )
}

export default Video
