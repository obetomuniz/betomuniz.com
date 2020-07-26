const path = require(`path`)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/post/post.js`)
  const dropTemplate = path.resolve(`src/components/drop/drop.js`)

  return graphql(`
    {
      posts: allMdx(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      drops: allMdx(
        filter: { frontmatter: { templateKey: { eq: "drop-post" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.frontmatter.slug,
        },
      })
    })

    return result.data.drops.edges.forEach(({ node }) => {
      createPage({
        path: `/drops/${node.frontmatter.slug}`,
        component: dropTemplate,
        context: {
          id: node.frontmatter.slug,
        },
      })
    })
  })
}
