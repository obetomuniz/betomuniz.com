import React from "react"

import { TalkListItem } from "../"
import { Container } from "./ui"

const TalkList = ({ data }) => (
  <Container>
    {data.map(
      (
        { node: { talk, talk_url, location, talk_date, event, category } },
        index
      ) => (
        <TalkListItem
          key={`talk-${index}`}
          talk={talk}
          url={talk_url}
          location={location}
          date={talk_date}
          event={event}
          category={category}
        />
      )
    )}
  </Container>
)

export default TalkList
