const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/post/post.js`)

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
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(
      ({
        node: {
          frontmatter: { path, external },
        },
      }) => {
        if (!external) {
          createPage({
            path,
            component: blogPostTemplate,
            context: {},
          })
        }
      }
    )
  })
}
