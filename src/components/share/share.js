import React, { useCallback } from "react"
import { Container, ShareLabel } from "./ui"

const Share = ({ ctaText, title, text, url, className, hashtags }) => {
  const onShare = useCallback(() => {
    navigator.share(
      {
        title,
        text: text || "Olha esse drop do @obetomuniz 👇",
        url,
        hashtags: hashtags.map((h) => h.replace(/\s/g, "")).join(","),
      },
      { print: false, skype: false }
    )
  }, [title, text, url, hashtags])

  return (
    <Container className={className}>
      <ShareLabel onClick={onShare}>{ctaText || "Share"}</ShareLabel>
    </Container>
  )
}

export default Share
