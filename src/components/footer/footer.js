import React from "react"

import { Newsletter } from "../"
import { Container } from "./ui"

const Footer = ({ footerNewsletterLabel }) => (
  <Container>
    <Newsletter label={footerNewsletterLabel} />
  </Container>
)

export default Footer
