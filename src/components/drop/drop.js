import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ArticleJsonLd } from "gatsby-plugin-next-seo"

import { Layout, SEO, Code } from "../"
import {
  Container,
  Header,
  Title,
  Subtitle,
  Register,
  RegisterDate,
  RegisterCategory,
  Content,
  DesktopShare,
  MobileShare,
} from "./ui"

const components = {
  pre: (props) => <code {...props} />,
  code: Code,
}

export default function Template({ data }) {
  const { site, mdx } = data
  const {
    frontmatter: {
      path,
      title,
      subtitle,
      description,
      keywords,
      date,
      datePublished,
      category,
    },
    body,
  } = mdx
  const dropUrl = `${site.siteMetadata.siteUrl + path}`

  return (
    <Layout location="/blog/">
      <SEO
        title={title}
        subtitle={subtitle}
        description={description}
        keywords={keywords}
        url={dropUrl}
      />
      <ArticleJsonLd
        url={dropUrl}
        headline={`${title}${subtitle ? `: ${subtitle}` : ""}`}
        images={["https://betomuniz.com/icons/icon-512x512.png"]}
        datePublished={datePublished}
        authorName="Beto Muniz"
        publisherName="Beto Muniz Blog"
        publisherLogo="https://betomuniz.com/icons/icon-512x512.png"
        description={description}
        overrides={{
          "@type": "BlogPosting",
        }}
      />

      <DesktopShare url={dropUrl} text="Olha esse drop do @obetomuniz 👇" />
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
        <Content>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Content>
      </Container>
      <MobileShare
        url={dropUrl}
        ctaText={"Share It!"}
        text="Olha esse artigo do @obetomuniz 👇"
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "YYYY")
        datePublished: date
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
