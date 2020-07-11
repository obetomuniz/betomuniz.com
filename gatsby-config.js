module.exports = {
  siteMetadata: {
    title: `Beto Muniz`,
    author: `@obetomuniz`,
    url: `https://betomuniz.com`,
    description: `Beto Muniz is a Front-End Engineer who lives in Belo Horizonte, Brazil.`,
  },
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/static/images`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `drops`,
        path: `${__dirname}/src/content/drops`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: "100%",
              height: 500,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-31461010-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beto Muniz's Website`,
        short_name: `Beto Muniz`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#1f1f1f`,
        display: `minimal-ui`,
        icon: `src/static/images/betomunizcom-icon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                url
                siteUrl: url
                site_url: url
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
                .map((edge) => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: `${site.siteMetadata.siteUrl}${edge.node.frontmatter.path}`,
                    guid: `${site.siteMetadata.siteUrl}${edge.node.frontmatter.path}`,
                    title: `${edge.node.frontmatter.title}${
                      edge.node.frontmatter.subtitle
                        ? `: ${edge.node.frontmatter.subtitle}`
                        : ""
                    }`,
                  })
                })
                .filter((edge) => {
                  return (
                    edge.node &&
                    edge.node.frontmatter &&
                    !edge.node.frontmatter.drops
                  )
                })
            },
            query: `
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
            `,
            output: "/blog/feed.xml",
          },
        ],
      },
    },
  ],
}
