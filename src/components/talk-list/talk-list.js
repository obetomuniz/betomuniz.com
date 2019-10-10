import React from "react"

import { TalkListItem } from "../"

const TalkList = ({ data }) => (
  <ul>
    {data.map(
      ({ node: { talk, talk_url, location, talk_date, event } }, index) => (
        <TalkListItem
          key={`talk-${index}`}
          talk={talk}
          url={talk_url}
          location={location}
          date={talk_date}
          event={event}
        />
      )
    )}
  </ul>
)

export default TalkList
