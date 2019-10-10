import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, ProjectList } from "../components"

const ProjectsPage = ({
  data: {
    allProjectsJson: { edges },
  },
}) => {
  return (
    <Layout location="/projects/">
      <SEO
        title="Projects"
        description="Beto Muniz as a community contributor and creator."
        keywords="beto, muniz, open source, projects, beto muniz, betomuniz"
      />

      <section>
        <ProjectList data={edges} />
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          name
          url
          image
        }
      }
    }
  }
`
