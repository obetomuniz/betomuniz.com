import React from "react"
import { Container } from "./ui"

const A = ({ children, href }) => {
  return (
    <Container href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Container>
  )
}

export default A
