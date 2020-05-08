import React from "react"

import {
  Container,
  Category,
  Name,
  EventInfos,
  EventLocation,
  EventName,
  Separator,
} from "./ui"

const TalkListItem = ({ talk, url, location, date, event, category }) => (
  <Container>
    <Category color={`--DEFAULT_${category.toUpperCase()}_CATEGORY_COLOR`}>
      {category.replace("_", " ")}
    </Category>
    <h4>
      {url ? (
        <Name as="a" href={url} target="_blank" rel="noopener noreferrer">
          {talk}
        </Name>
      ) : (
        <Name as="span">{talk}</Name>
      )}
    </h4>
    <EventInfos>
      <EventLocation hide>{location}</EventLocation>
      <Separator hide>ᐧ</Separator>
      <EventName>{event}</EventName>
    </EventInfos>
  </Container>
)

export default TalkListItem
