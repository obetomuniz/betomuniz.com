import React from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"

import { Layout, SEO } from "../"
import {
  Container,
  Header,
  Title,
  Subtitle,
  Register,
  RegisterDate,
  RegisterCategory,
  Content,
  DisqusContainer,
} from "./ui"

export default function Template({ data }) {
  let disqusConfig = {}
  const { site, markdownRemark } = data
  const {
    frontmatter: {
      path,
      title,
      subtitle,
      description,
      keywords,
      date,
      category,
    },
    html,
  } = markdownRemark

  disqusConfig.url = `${site.siteMetadata.url + path}`
  disqusConfig.identifier = path
  disqusConfig.title = title

  const dropStyles = `
    <style type="text/css">

    </style>
  `

  return (
    <Layout location="/blog/">
      <SEO
        title={title}
        subtitle={subtitle}
        description={description}
        keywords={keywords}
        url={disqusConfig.url}
      />

      <Container>
        <Header>
          <Title>
            {title} {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </Title>
          <Register>
            <RegisterCategory
              color={`--DEFAULT_${category.toUpperCase()}_CATEGORY_COLOR`}
            >
              {category.replace("_", " ")}
            </RegisterCategory>
            {" ᐧ "}
            <RegisterDate>{date}</RegisterDate>
          </Register>
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: `${dropStyles}${html}` }} />
      </Container>
      <DisqusContainer id="disqus_thread">
        <Disqus config={disqusConfig} />
      </DisqusContainer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        url
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY")
        path
        title
        subtitle
        description
        keywords
        category
      }
    }
  }
`
