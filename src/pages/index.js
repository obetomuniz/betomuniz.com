import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, About, PostPreviewList } from "../components"
import { PostPreviewListWrapper } from "../components/post-preview-list/ui"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const categories = {}
  let postPreviews = []
  for (let index = 0; index < edges.length; index++) {
    const post = edges[index].node.frontmatter
    if (!categories[post.category]) {
      categories[post.category] = [post]
    } else {
      categories[post.category] = [...categories[post.category], post]
    }
  }
  for (const key in categories) {
    if (categories.hasOwnProperty(key)) {
      const posts = categories[key]
      postPreviews = [
        <PostPreviewList
          key={`post-preview-${key}`}
          category={key}
          data={posts}
        />,
        ...postPreviews,
      ]
    }
  }

  return (
    <Layout location="/" className={"center-content"}>
      <SEO
        description="Beto Muniz is a Front-End Engineer who lives in Belo Horizonte, Brazil."
        keywords="beto, muniz, home, beto muniz, betomuniz, obetomuniz, front-end, javascript, developer, engineer"
        url="https://betomuniz.com/"
      />

      <About />

      <PostPreviewListWrapper>{postPreviews}</PostPreviewListWrapper>
    </Layout>
  )
}

export default IndexPage

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
          }
        }
      }
    }
  }
`
