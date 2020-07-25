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
  code: Code,
  pre: (props) => <code {...props} />,
}

const ContentComponent = ({ children, isCMS }) => {
  return isCMS ? (
    <Content>{children}</Content>
  ) : (
    <Content>
      <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </Content>
  )
}

export const PostTemplate = ({ data }) => {
  const {
    content,
    title,
    subtitle,
    datePublished,
    category,
    timeToRead,
    isCMS,
  } = data

  return (
    <Container>
      <Header>
        <Title>
          {title} {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Title>
        <Register>
          {category && (
            <>
              <RegisterCategory
                color={`--DEFAULT_${category.toUpperCase()}_CATEGORY_COLOR`}
              >
                {category.replace("_", " ")}
              </RegisterCategory>
              {" ᐧ "}
            </>
          )}
          {/* <RegisterDate>{datePublished}</RegisterDate> */}
          {timeToRead && (
            <>
              {" ᐧ "}
              <RegisterReadingTime>{`${timeToRead}m`}</RegisterReadingTime>
            </>
          )}
        </Register>
      </Header>
      <ContentComponent isCMS={isCMS}>{content}</ContentComponent>
    </Container>
  )
}

export default function Post({ data }) {
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
      <PostTemplate
        data={{
          content: body,
          title,
          subtitle,
          datePublished,
          category,
          timeToRead,
        }}
      />

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
