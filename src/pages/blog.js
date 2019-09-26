import React from "react"
import { graphql, Link } from "gatsby"

import { Layout, SEO } from "../components"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <Link key={edge.node.id} to={edge.node.frontmatter.path}>
        {edge.node.frontmatter.title} ({edge.node.frontmatter.date})
      </Link>
    ))

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Beto Muniz as a Blogger and sharing knowledge."
        keywords="beto, muniz, blog, beto muniz, betomuniz"
      />

      <section>
        <ul>
          {/* <li>
            <a class="blog__item" href="" {{#if external}}target="_blank" rel="noopener noreferrer"{{/if}}>
            <a href="/">
              <h3 class="blog__item-link">{{page_title}} {{#if page_subtitle}}{{page_subtitle}}{{/if}}</h3>
              <h3>Blogpost</h3>
            </a>
          </li> */}
          {Posts}
        </ul>
      </section>
    </Layout>
  )
}
export default BlogPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
