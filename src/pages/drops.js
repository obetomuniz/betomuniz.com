import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, DropList } from "../components"

const DropsPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout location="/drops/">
      <SEO
        title="Drops"
        description="Beto Muniz's Content Drops - The fast way to track Beto's knowledge."
        keywords="beto, muniz, drops, content, beto muniz, betomuniz"
        url="https://betomuniz.com/drops/"
        isPage
      />
      <main>
        <DropList data={edges} />
      </main>
    </Layout>
  )
}
export default DropsPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "drop-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            description
            category
            lang
            slug
            external
            externalLink
          }
        }
      }
    }
  }
`
