import React from "react"

import { Layout, SEO } from "../components"

const NotFoundPage = () => (
  <Layout location="/not-found/">
    <SEO
      title="404: Not Found"
      description="Beto Muniz is a Front-End Engineer who lives in Belo Horizonte, Brazil."
      keywords="beto, muniz, not found, beto muniz, betomuniz, obetomuniz, front-end, javascript, developer, engineer"
      url="https://betomuniz.com"
    />
    <section>
      <h1>NOT FOUND</h1>
      <br />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export default NotFoundPage
