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
  RegisterReadingTime,
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
      datePublished,
      path,
      title,
      subtitle,
      description,
      keywords,
      date,
      category,
    },
    timeToRead,
    body,
  } = mdx
  const postUrl = `${site.siteMetadata.siteUrl + path}`

  return (
    <Layout location="/blog/">
      <SEO
        title={title}
        subtitle={subtitle}
        description={description}
        keywords={keywords}
        url={postUrl}
      />
      <ArticleJsonLd
        url={postUrl}
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

      <DesktopShare url={postUrl} text="Olha esse artigo do @obetomuniz 👇" />
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
            {" ᐧ "}
            <RegisterReadingTime>{`${timeToRead}m`}</RegisterReadingTime>
          </Register>
        </Header>
        <Content>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Content>
      </Container>
      <MobileShare
        url={postUrl}
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
      timeToRead
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
