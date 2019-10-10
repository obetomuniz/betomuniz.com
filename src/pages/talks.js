import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, TalkList } from "../components"

const TalksPage = ({
  data: {
    allTalksJson: { edges },
  },
}) => {
  return (
    <Layout location="/talks/">
      <SEO
        title="Talks"
        description="Beto Muniz as a speaker."
        keywords="beto, muniz, speaker, talks, beto muniz, betomuniz"
      />

      <section>
        <TalkList data={edges} />
      </section>
    </Layout>
  )
}

export default TalksPage

export const pageQuery = graphql`
  query {
    allTalksJson(sort: { order: DESC, fields: [talk_date] }) {
      edges {
        node {
          talk
          talk_url
          location
          talk_date(formatString: "MMMM DD, YYYY")
          event
        }
      }
    }
  }
`
