import React from "react"
import { Link } from "gatsby"

import { Layout, SEO } from "../components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        description="Beto Muniz is a Front-End Engineer who lives in Belo Horizonte, Brazil."
        keywords="beto, muniz, home, beto muniz, betomuniz, obetomuniz, front-end, javascript, developer, engineer"
      />

      <section>
        <p>
          Hi! I'm Beto Muniz , Brazilian and Front-End Engineer.
          <br />
          I'm inspired by the study of new technologies, the community, and
          always attuned to what is happening and willing to contribute to the
          community via <Link to="/blog/">posts</Link>,{" "}
          <Link to="/projects/">projects</Link>, and{" "}
          <Link to="/talks/">talks</Link>.
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
