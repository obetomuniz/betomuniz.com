import React from "react"

import { Container, Text, TextLink } from "./ui"

const About = () => (
  <Container>
    <Text>
      Hi! I'm Beto Muniz , Brazilian and Front-End Engineer.
      <br />
      I'm inspired by the study of new technologies, the community, and always
      attuned to what is happening and willing to contribute to the community
      via <TextLink to="/blog/">posts</TextLink>,{" "}
      <TextLink to="/projects/">projects</TextLink>, and{" "}
      <TextLink to="/talks/">talks</TextLink>.
    </Text>
  </Container>
)

export default About
