module.exports = {
  siteMetadata: {
    title: `Beto Muniz`,
    author: `@obetomuniz`,
    url: `https://betomuniz.com`,
  },
  plugins: [
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
        name: `json`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `obetomuniz`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-reading-time`],
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
  ],
}
