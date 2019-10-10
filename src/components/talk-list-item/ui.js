import styled from "styled-components"

export const Container = styled.li`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 440px) {
    margin-bottom: 25px;
  }
`

export const Name = styled.span`
  text-decoration: none;
  display: inline-block;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #222222;
  font-weight: bold;

  &:hover {
    color: ${({ as }) => (as === "a" ? "#777777" : "currentColor")};
    text-decoration: ${({ as }) => (as === "a" ? "underline" : "none")};
  }

  @media screen and (max-width: 440px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`

export const EventInfos = styled.div`
  display: flex;
  align-items: center;
`

export const EventLocation = styled.address`
  font-size: 13px;
  color: #666666;

  @media screen and (max-width: 440px) {
    font-size: 0.6rem;
    display: none;
  }
`

export const EventDate = styled.time`
  font-size: 13px;
  color: #666666;

  @media screen and (max-width: 440px) {
    font-size: 0.6rem;
  }
`

export const EventName = styled.p`
  font-size: 13px;
  color: #666666;

  @media screen and (max-width: 440px) {
    font-size: 0.6rem;
  }
`

export const Separator = styled.span`
  margin: 0 6px;

  @media screen and (max-width: 440px) {
    display: ${({ hide }) => (hide ? "none" : "inline-block")};
  }
`
