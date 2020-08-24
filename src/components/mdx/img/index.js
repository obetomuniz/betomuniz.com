import React from "react"
import { A } from "../"
import { Container } from "./ui"

const Img = ({ src, author, authorURL, alt = "" }) => {
  return (
    <Container>
      <img src={src} alt={alt} />
      {author && authorURL && (
        <figcaption>
          Fonte: <A href={authorURL}>{author}</A>
        </figcaption>
      )}
    </Container>
  )
}

export default Img
