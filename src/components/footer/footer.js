import React from "react"

import { Newsletter } from "../"
import { Container, Copyright } from "./ui"

const Footer = ({ footerNewsletterLabel }) => (
  <Container>
    <Newsletter label={footerNewsletterLabel} />

    <Copyright>
      Copyright <a href="https://betomuniz.com">Beto Muniz</a>
      &copy; 2010-{new Date().getFullYear()}. All rights reserved.
    </Copyright>
  </Container>
)

export default Footer
