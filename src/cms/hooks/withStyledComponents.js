import React, { useState, useEffect } from "react"
import { StyleSheetManager } from "styled-components"
import { LightThemeStyle } from "../../components/theme"
import { GlobalStyle, Container } from "../../components/layout/ui"

const Layout = ({ children }) => {
  return (
    <>
      <LightThemeStyle />
      <GlobalStyle />
      <div>
        <Container>{children}</Container>
      </div>
    </>
  )
}

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null)

  useEffect(() => {
    const iframe = document.getElementsByTagName("iframe")[0]
    const iframeHeadElem = iframe.contentDocument.head

    setIframeRef(iframeHeadElem)
  }, [])

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <Layout>{children}</Layout>
      </StyleSheetManager>
    )
  )
}

export default function withStyledComponents(Comp) {
  return (props) => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  )
}
