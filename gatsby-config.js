module.exports = {
  siteMetadata: {
    title: `Beto Muniz`,
    author: `@obetomuniz`,
    siteUrl: `https://betomuniz.com`,
    description: `Beto Muniz is a Front-End Engineer who lives in Belo Horizonte, Brazil.`,
  },
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-next-seo`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/vectors`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: "100%",
              height: 500,
            },
          },
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
        start_url: `.`,
        background_color: `#664399`,
        theme_color: `#664399`,
        display: `minimal-ui`,
        icon: `src/static/images/betomunizcom-icon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://betomuniz.com",
        sitemap: "https://betomuniz.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: ["/"] }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     reportOnly: false,
    //     mergeScriptHashes: true,
    //     mergeStyleHashes: true,
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       "script-src": "'self' https: www.google-analytics.com",
    //       "style-src": "",
    //       "media-src": "'self' https: twimg.com",
    //       "frame-src": "'self' https: twitter.com",
    //       "img-src":
    //         "'self' data: https: www.google-analytics.com github.com gravatar.com githubusercontent.com",
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges
                .filter((edge) => {
                  return edge.node && edge.node.frontmatter
                })
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
            },
            query: `
              query {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: { frontmatter: { draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      id
                      excerpt(pruneLength: 250)
                      frontmatter {
                        date
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
            output: "/rss.xml",
            title: "RSS Feed do Beto Muniz",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/blog/*`, `/drops/*`, `/projects/*`, `/talks/*`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `weekly`,
              priority: 1.0,
            }
          }),
      },
    },
  ],
}
