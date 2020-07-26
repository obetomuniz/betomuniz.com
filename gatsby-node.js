const path = require(`path`)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/post/post.js`)
  const dropTemplate = path.resolve(`src/components/drop/drop.js`)

  return graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
              external
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

    return result.data.allMdx.edges.forEach(
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
