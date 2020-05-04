import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"

import { LightThemeStyle } from "../theme"
import { GlobalStyle, Container } from "./ui"

const Layout = ({ children, location, className }) => {
  return (
    <>
      <LightThemeStyle />
      <GlobalStyle />
      <div className={className}>
        <Header location={location} />
        <Container>{children}</Container>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
