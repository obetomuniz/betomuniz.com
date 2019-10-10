import React from "react"

import Icon from "../../static/images/icons.svg"
import { Container, Socials, SocialsItem, SocialsIcon } from "./ui"

const Footer = () => (
  <>
    <Icon />
    <Container>
      <Socials>
        <SocialsItem>
          <a
            title="Beto Muniz Linkedin"
            href="https://www.linkedin.com/in/obetomuniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialsIcon>
              <use xlinkHref="#linkedin"></use>
            </SocialsIcon>
          </a>
        </SocialsItem>
        <SocialsItem>
          <a
            title="Beto Muniz GitHub"
            href="https://github.com/obetomuniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialsIcon>
              <use xlinkHref="#github"></use>
            </SocialsIcon>
          </a>
        </SocialsItem>
        <SocialsItem>
          <a
            title="Beto Muniz Twitter"
            href="https://twitter.com/obetomuniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialsIcon>
              <use xlinkHref="#twitter"></use>
            </SocialsIcon>
          </a>
        </SocialsItem>
        <SocialsItem>
          <a title="Beto Muniz RSS" href="https://betomuniz.com/blog/feed.xml">
            <SocialsIcon>
              <use xlinkHref="#rss"></use>
            </SocialsIcon>
          </a>
        </SocialsItem>
        <SocialsItem>
          <a title="Beto Muniz Email" href="mailto:contato@betomuniz.com">
            <SocialsIcon>
              <use xlinkHref="#mail"></use>
            </SocialsIcon>
          </a>
        </SocialsItem>
      </Socials>
    </Container>
  </>
)

export default Footer
