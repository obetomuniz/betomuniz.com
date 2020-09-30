import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO, VideoList } from "../components"

const VideosPage = ({
  data: {
    allVideosJson: { edges },
  },
}) => {
  return (
    <Layout location="/videos/">
      <SEO
        title="Videos"
        description="Beto's on Air."
        keywords="beto, muniz, speaker, videos, beto muniz, betomuniz"
        url="https://betomuniz.com/videos/"
        isPage
      />

      <main>
        <VideoList data={edges} />
      </main>
    </Layout>
  )
}

export default VideosPage

export const pageQuery = graphql`
  query {
    allVideosJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          vid
          title
          category
        }
      }
    }
  }
`
