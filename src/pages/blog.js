import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, PostList } from "../components"

const BlogPage = ({
  data: {
    allMdx: { edges },
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
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
          }
        }
      }
    }
  }
`
