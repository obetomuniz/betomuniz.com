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
        url="https://betomuniz.com/projects/"
      />

      <main>
        <ProjectList data={edges} />
      </main>
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
