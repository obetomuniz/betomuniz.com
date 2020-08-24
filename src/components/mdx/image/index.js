import React from "react"
import { A } from "../"
import { Container } from "./ui"

const Video = ({ src, author, authorURL, alt = "" }) => {
  return (
    <Container>
      <img src={src} alt={alt} />
      {author && authorURL && (
        <figcaption>
          Image from <A href={authorURL}>{author}</A>
        </figcaption>
      )}
    </Container>
  )
}

export default Video
