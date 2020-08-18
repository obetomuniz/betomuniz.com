import React from "react"
import PropTypes from "prop-types"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  keywords,
  lang,
  title,
  url,
  subtitle,
  featured,
  isPage,
  isHome,
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
    <GatsbySeo
      language={lang}
      title={customTitle}
      description={description}
      canonical={url}
      twitter={{
        cardType: "summary_large_image",
        site: "@obetomuniz",
        handle: "@obetomuniz",
      }}
      openGraph={{
        url,
        type: "website",
        title: customTitle,
        description,
        images:
          featured && featured.length
            ? featured.map((img) => ({
                url: img ? img : "https://betomuniz.com/icons/icon-512x512.png",
              }))
            : [{ url: "https://betomuniz.com/icons/icon-512x512.png" }],
        locale: "pt_BR",
        site_name: "Beto Muniz",
        profile: {
          firstName: "Beto",
          lastName: "Muniz",
          username: "obetomuniz",
          gender: "male",
        },
      }}
      metaTags={[{ name: "keywords", content: keywords }]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  keywords: ``,
  title: ``,
  url: ``,
  subtitle: ``,
  isPage: false,
  isHome: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  subtitle: PropTypes.string,
  featured: PropTypes.array,
  isPage: PropTypes.bool,
  isHome: PropTypes.bool,
}

export default SEO
