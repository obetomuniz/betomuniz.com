import React from "react"

import { Layout, SEO } from "../components"

import talks from "../content/talks.json"

const TalkListItem = ({ talk, url, location, date, event }) => (
  <li>
    <h4>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {talk}
        </a>
      ) : (
        <span>{talk}</span>
      )}
    </h4>
    <div>
      <address>{location}</address>
      <span>•</span>
      <time>{date}</time>
      <span>•</span>
      <p>{event}</p>
    </div>
  </li>
)

const TalkList = ({ data }) => (
  <ul>
    {data.map(({ talk, talk_url, location, talk_date, event }, index) => (
      <TalkListItem
        key={`talk-${index}`}
        talk={talk}
        url={talk_url}
        location={location}
        date={talk_date}
        event={event}
      />
    ))}
  </ul>
)

const TalksPage = () => {
  return (
    <Layout>
      <SEO
        title="Talks"
        description="Beto Muniz as a speaker."
        keywords="beto, muniz, speaker, talks, beto muniz, betomuniz"
      />

      <section>
        <TalkList data={talks} />
      </section>
    </Layout>
  )
}

export default TalksPage
