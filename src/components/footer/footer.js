import React from "react"

import { Newsletter } from "../"
import { Container, Copyright } from "./ui"

const Footer = ({ footerNewsletterLabel }) => (
  <Container>
    <Newsletter label={footerNewsletterLabel} />

    <Copyright>
      &copy; {new Date().getFullYear()}{" "}
      <a href="https://betomuniz.com">Beto Muniz</a>. All rights reserved.
    </Copyright>
  </Container>
)

export default Footer
