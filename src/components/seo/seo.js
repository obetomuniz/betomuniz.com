import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  keywords,
  lang,
  meta,
  title,
  url,
  subtitle,
  isPage,
  isHome,
  bodyAttributes,
}) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
          }
        }
      }
    `
  )

  let customTitle = ""

  if (isPage) {
    customTitle = `${title} | ${siteMetadata.title}`
  } else if (isHome) {
    customTitle = siteMetadata.title
  } else {
    customTitle = subtitle
      ? `${title}: ${subtitle} | ${siteMetadata.title}`
      : `${title} | ${siteMetadata.title}`
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={bodyAttributes}
      title={customTitle}
      meta={[
        {
          name: `keywords`,
          content: keywords,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: customTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: "https://betomuniz.com/icons/icon-512x512.png",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: customTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: ``,
  title: ``,
  url: ``,
  subtitle: ``,
  bodyAttributes: {},
  isPage: false,
  isHome: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  url: PropTypes.string,
  subtitle: PropTypes.string,
  bodyAttributes: PropTypes.object,
  isPage: PropTypes.bool,
  isHome: PropTypes.bool,
}

export default SEO
