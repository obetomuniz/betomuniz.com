import React from "react"

import { Layout, SEO, About } from "../components"

const IndexPage = () => {
  return (
    <Layout location="/">
      <SEO
        bodyAttributes={{
          class: "center",
        }}
        description="Beto Muniz is a Front-End Engineer who lives in Belo Horizonte, Brazil."
        keywords="beto, muniz, home, beto muniz, betomuniz, obetomuniz, front-end, javascript, developer, engineer"
      />

      <About />
    </Layout>
  )
}

export default IndexPage
