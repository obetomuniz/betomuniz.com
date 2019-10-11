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
  RegisterReadingTime,
  Content,
} from "./ui"

export default function Template({ data }) {
  const isBrowser = typeof window !== "undefined"
  let disqusConfig = {}
  const { site, markdownRemark } = data
  const {
    frontmatter: { path, title, subtitle, description, keywords, date },
    fields: { readingTime },
    html,
  } = markdownRemark
  if (isBrowser) {
    disqusConfig.url = `${site.siteMetadata.url + window.location.pathname}`
    disqusConfig.identifier = path
    disqusConfig.title = title
  }
  return (
    <Layout location="/blog/">
      <SEO
        title={title}
        subtitle={subtitle}
        description={description}
        keywords={keywords}
      />

      <Container>
        <Header>
          <Title>
            {title} {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </Title>
          <Register>
            <RegisterDate>{date}</RegisterDate>
            {" • "}
            <RegisterReadingTime>{readingTime.text}</RegisterReadingTime>
          </Register>
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
        <div id="disqus_thread">
          {isBrowser && <Disqus config={disqusConfig} />}
        </div>
      </Container>
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
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        description
        keywords
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
