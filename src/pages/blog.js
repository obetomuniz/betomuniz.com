import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, PostList } from "../components"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout location="/blog/">
      <SEO
        title="Blog"
        description="Beto Muniz as a writer."
        keywords="beto, muniz, blog, beto muniz, betomuniz"
        url="https://betomuniz.com/blog/"
      />

      <main>
        <PostList data={edges} />
      </main>
    </Layout>
  )
}
export default BlogPage

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
          }
        }
      }
    }
  }
`
