import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"

import { LightThemeStyle } from "../theme"
import { GlobalStyle, Container } from "./ui"

const Layout = ({
  children,
  location,
  className,
  hideSocialsOnHeader,
  footerNewsletterLabel,
}) => {
  return (
    <>
      <LightThemeStyle />
      <GlobalStyle />
      <div className={className}>
        <Header location={location} hideSocialsOnHeader={hideSocialsOnHeader} />
        <Container>{children}</Container>
        <Footer footerNewsletterLabel={footerNewsletterLabel} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
