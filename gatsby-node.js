const path = require(`path`)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/post/post.js`)
  const dropTemplate = path.resolve(`src/components/drop/drop.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              external
              draft
              drops
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(
      ({
        node: {
          frontmatter: { path, external, drops },
        },
      }) => {
        if (!external) {
          const component = drops ? dropTemplate : blogPostTemplate
          createPage({
            path,
            component,
            context: {},
          })
        }
      }
    )
  })
}
