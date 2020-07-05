import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, DropList } from "../components"

const DropsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout location="/drops/">
      <SEO
        title="Drops"
        description="Beto Muniz's Content Drops - The fast way to track Beto's knowledge."
        keywords="beto, muniz, drops, content, beto muniz, betomuniz"
        url="https://betomuniz.com/drops/"
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            subtitle
            external
            category
            lang
            drops
          }
        }
      }
    }
  }
`
