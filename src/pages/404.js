import React from "react"

import { Layout, SEO } from "../components"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not Found"
      description="Beto Muniz is a Front-End Engineer who lives in Belo Horizonte, Brazil."
      keywords="beto, muniz, home, beto muniz, betomuniz, obetomuniz, front-end, javascript, developer, engineer"
    />
    <section>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export default NotFoundPage
