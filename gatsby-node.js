const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const dropTemplate = path.resolve(`src/components/drop/drop.js`)

  return graphql(`
    {
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

    return result.data.drops.edges.forEach(({ node }) => {
      if (!node.frontmatter.external) {
        createPage({
          path: `/drops/${node.frontmatter.slug}`,
          component: dropTemplate,
          context: {
            id: node.frontmatter.slug,
          },
        })
      }
    })
  })
}
