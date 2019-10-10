import React from "react"

import {
  Container,
  Name,
  EventInfos,
  EventLocation,
  EventDate,
  EventName,
  Separator,
} from "./ui"

const TalkListItem = ({ talk, url, location, date, event }) => (
  <Container>
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
      <Separator hide>•</Separator>
      <EventDate>{date}</EventDate>
      <Separator>•</Separator>
      <EventName>{event}</EventName>
    </EventInfos>
  </Container>
)

export default TalkListItem
