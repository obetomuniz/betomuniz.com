import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, keywords, lang, meta, title }) {
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

  const customTitle = title
    ? `${siteMetadata.title} — ${title}`
    : siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
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
          property: `og:type`,
          content: `website`,
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
    >
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
