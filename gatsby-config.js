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
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: true,
        mergeStyleHashes: true,
        mergeDefaultDirectives: true,
        directives: {
          "base-uri": "none",
          "script-src": "'self' https: www.google-analytics.com 'unsafe-eval'",
          "style-src":
            "'self' 'unsafe-hashes' 'sha256-YdFQYChVXoZALj7I4zuMQavnwn1SWjgjJ3i7FS5+M5A=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-MtxTLcyxVEJFNLEIqbVTaqR4WWr0+lYSZ78AzGmNsuA=' 'sha256-o4LYhp5wtluJ8/NWUV2vi+r5AxmP8X2zEvYHCpji+kI='",
          "media-src": "'self' https: twimg.com",
          "frame-src": "'self' https: twitter.com",
          "img-src":
            "'self' data: https: www.google-analytics.com github.com gravatar.com githubusercontent.com res.cloudinary.com",
        },
      },
    },
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
                  const isExternal = edge.node.frontmatter.external
                  const prefix = "/drops/"
                  const title = `${edge.node.frontmatter.title}${
                    edge.node.frontmatter.subtitle
                      ? `: ${edge.node.frontmatter.subtitle}`
                      : ""
                  }`
                  let url = `${site.siteMetadata.siteUrl}${prefix}${edge.node.frontmatter.slug}`
                  if (isExternal) {
                    url = `${edge.node.frontmatter.slug}`
                  }
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.frontmatter.description,
                    date: edge.node.frontmatter.date,
                    url,
                    guid: url,
                    title,
                    // custom_elements: [
                    //   {
                    //     ...(edge.node.frontmatter.featured && {
                    //       featured: `${site.siteMetadata.siteUrl}${edge.node.frontmatter.featured}`,
                    //     }),
                    //   },
                    // ],
                  })
                })
            },
            query: `
              query {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      frontmatter {
                        templateKey
                        date
                        slug
                        title
                        subtitle
                        description
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
        exclude: [`/drops/*`, `/projects/*`, `/talks/*`],
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
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["Content-Security-Policy: frame-ancestors"],
        },
        mergeSecurityHeaders: true,
      },
    }, // make sure to keep it last in the array
  ],
}
