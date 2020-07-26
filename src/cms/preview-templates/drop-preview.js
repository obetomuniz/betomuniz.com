import React from "react"
import styled from "styled-components"

import { DropTemplate } from "../../components/drop/drop"

const Container = styled.div`
  margin: 40px auto;
`

const PostPreview = ({ entry, widgetFor }) => {
  const isExternal = entry.getIn(["data", "external"])
  if (isExternal) {
    return (
      <Container>
        <h1>External Link. No preview provided.</h1>
      </Container>
    )
  }
  const keywords = entry.getIn(["data", "tags"])
  const data = {
    content: widgetFor("body"),
    description: entry.getIn(["data", "description"]),
    keywords: keywords && keywords.toJS(),
    title: entry.getIn(["data", "title"]),
    subtitle: entry.getIn(["data", "subtitle"]),
    datePublished: entry.getIn(["data", "date"]),
    category: entry.getIn(["data", "category"]),
    isCMS: true,
  }
  return (
    <Container>
      <DropTemplate data={data} />
    </Container>
  )
}

export default PostPreview
