import React from "react"
import { Container, OriginalContentLink } from "./ui"

const Drop = ({ children, content }) => {
  return (
    <Container>
      {children}

      <OriginalContentLink
        href={`https://twitter.com/i/status/${content}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        See original content
      </OriginalContentLink>
    </Container>
  )
}

export default Drop
