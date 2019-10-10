import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"

import { GlobalStyle, Container } from "./ui"

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <Header location={location} />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
