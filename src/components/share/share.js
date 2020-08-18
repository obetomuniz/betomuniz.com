import React from "react"
import LinkedInIcon from "../../assets/vectors/icon-linkedin-square.svg"
import TwitterIcon from "../../assets/vectors/icon-twitter-square.svg"
import { Container, ShareLabel, ShareItem, ShareItemButton } from "./ui"

const shareModal = (url, winWidth, winHeight) => {
  if (typeof window !== "undefined") {
    const winTop = window.screen.height / 2 - winHeight / 2
    const winLeft = window.screen.width / 2 - winWidth / 2
    window.open(
      url,
      "sharer",
      "top=" +
        winTop +
        ",left=" +
        winLeft +
        ",toolbar=0,status=0,width=" +
        winWidth +
        ",height=" +
        winHeight
    )
  }
}

const Share = ({
  ctaText,
  text = "Olha esse drop do @obetomuniz 👇",
  url,
  className,
}) => {
  return (
    <Container className={className}>
      <ShareLabel>{ctaText || "Share"}</ShareLabel>
      <ShareItem color="#1da1f2">
        <ShareItemButton
          title="Compartilhe no Twitter"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            shareModal(
              `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
              800,
              600
            )
          }
        >
          <TwitterIcon />
        </ShareItemButton>
      </ShareItem>
      <ShareItem color="#0077b5">
        <ShareItemButton
          title="Compartilhe no Linkedin"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            shareModal(
              `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
              600,
              600
            )
          }
        >
          <LinkedInIcon />
        </ShareItemButton>
      </ShareItem>
    </Container>
  )
}

export default Share
