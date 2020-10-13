import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ArticleJsonLd } from "gatsby-plugin-next-seo"

import { Layout, SEO, Code } from "../"
import { A, Drop as DropComponent } from "../mdx"
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
  a: (props) => <A {...props} />,
}

const ContentComponent = ({ children, isCMS }) => {
  return isCMS ? (
    <Content>{children}</Content>
  ) : (
    <Content>
      <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
        <DropComponent>
          <p>
            💧 Gostou desse drop? <strong>Compartilhe-o.</strong> 🤩
          </p>
          <p>
            {
              "E para receber meus conteúdos assim que eu publicar, me segue lá no "
            }
            <A href="https://beto.im/telegram">Telegram</A> 😋
          </p>
        </DropComponent>
      </MDXProvider>
    </Content>
  )
}

export const DropTemplate = ({ data }) => {
  const { content, title, subtitle, datePublished, category, isCMS } = data

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
          <RegisterDate>{new Date(datePublished).getFullYear()}</RegisterDate>
        </Register>
      </Header>
      <ContentComponent isCMS={isCMS}>{content}</ContentComponent>
    </Container>
  )
}

export default function Drop({ data: { site, mdx }, path }) {
  const {
    frontmatter: {
      title,
      subtitle,
      description,
      keywords,
      category,
      datePublished,
      slug,
      featured,
    },
    body,
  } = mdx
  const dropUrl = `${site.siteMetadata.siteUrl}/drops/${slug}`
  return (
    <Layout location="/drops/">
      <SEO
        title={title}
        subtitle={subtitle}
        description={description}
        keywords={keywords.join(",")}
        url={dropUrl}
        featured={featured}
      />
      <ArticleJsonLd
        url={dropUrl}
        headline={`${title}${subtitle ? `: ${subtitle}` : ""}`}
        images={["https://betomuniz.com/icons/icon-512x512.png"]}
        datePublished={datePublished}
        authorName="Beto Muniz"
        publisherName="Beto Muniz"
        publisherLogo="https://betomuniz.com/icons/icon-512x512.png"
        description={description}
        overrides={{
          "@type": "BlogPosting",
        }}
      />
      <DesktopShare title={title} url={dropUrl} hashtags={keywords} />
      <DropTemplate
        data={{
          content: body,
          title,
          subtitle,
          datePublished,
          category,
        }}
      />
      <MobileShare
        ctaText={"Share It!"}
        title={title}
        url={dropUrl}
        hashtags={keywords}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(frontmatter: { slug: { eq: $id } }) {
      body
      frontmatter {
        title
        subtitle
        description
        datePublished: date
        keywords
        category
        lang
        slug
        featured
      }
    }
  }
`
