import React from "react"

import { ScreenReaderContent } from "../"
import { Container, Text, TextLink } from "./ui"

const About = () => (
  <Container>
    <Text>
      {"I'm Beto Muniz, a Front-End Engineer who lives in"}
      <ScreenReaderContent as={"span"}>Belo Horizonte,</ScreenReaderContent>
      {" Brazil."}
      <br />
      {
        "Inspired by web technologies, I am always contributing to the community with "
      }
      <TextLink to="/blog/">{"posts"}</TextLink>
      {", "}
      <TextLink
        href="https://www.youtube.com/c/betomuniz"
        target="_blank"
        rel="noopener noreferrer"
        as={"a"}
      >
        {"videos"}
      </TextLink>
      {", "}
      <TextLink to="/projects/">{"projects"}</TextLink>
      {", and "}
      <TextLink to="/talks/">{"talks"}</TextLink>.
    </Text>
  </Container>
)

export default About
