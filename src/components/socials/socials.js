import React from "react"
import LinkedInIcon from "../../assets/vectors/icon-linkedin.svg"
import TwitterIcon from "../../assets/vectors/icon-twitter.svg"
import EmailIcon from "../../assets/vectors/icon-email.svg"
import GitHubIcon from "../../assets/vectors/icon-github.svg"
// import RSSIcon from "../../assets/vectors/icon-rss.svg"
import TelegramIcon from "../../assets/vectors/icon-telegram.svg"
import YouTubeIcon from "../../assets/vectors/icon-youtube.svg"
import InstagramIcon from "../../assets/vectors/icon-instagram.svg"
import { Container, SocialsItem, SocialsItemLink } from "./ui"

const Socials = () => (
  <Container>
    <SocialsItem color="#f00">
      <SocialsItemLink
        title="Beto Muniz YouTube"
        href="https://www.youtube.com/c/betomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="#C13584">
      <SocialsItemLink
        title="Beto Muniz Instagram"
        href="https://instagram.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="#0077b5">
      <SocialsItemLink
        title="Beto Muniz Linkedin"
        href="https://www.linkedin.com/in/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="#32afed">
      <SocialsItemLink
        title="Beto Muniz Telegram"
        href="https://t.me/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </SocialsItemLink>
    </SocialsItem>
    {/* <SocialsItem color="#1da1f2">
      <SocialsItemLink
        title="Beto Muniz Twitter"
        href="https://twitter.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </SocialsItemLink>
    </SocialsItem> */}
    {/* <SocialsItem color="#24292e">
      <SocialsItemLink
        title="Beto Muniz GitHub"
        href="https://github.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </SocialsItemLink>
    </SocialsItem> */}
    <SocialsItem color="dimgrey">
      <SocialsItemLink
        title="Beto Muniz Email"
        href="mailto:contato@betomuniz.com"
      >
        <EmailIcon />
      </SocialsItemLink>
    </SocialsItem>
  </Container>
)

export default Socials
