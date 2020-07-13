import React from "react"
import RedirectIcon from "../../../assets/vectors/icon-redirect.svg"
import { ScreenReaderContent } from "../../"
import { Container, OriginalContentLink } from "./ui"

const Drop = ({ children, src }) => {
  return (
    <Container>
      {children}

      <OriginalContentLink
        href={`https://twitter.com/i/status/${src}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ScreenReaderContent>{"See original content"}</ScreenReaderContent>
        <RedirectIcon />
      </OriginalContentLink>
    </Container>
  )
}

export default Drop
