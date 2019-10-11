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
  font-size: var(--DEFAULT_LIST_ITEM_LABEL_FONT_SIZE);
  line-height: var(--DEFAULT_LIST_ITEM_LABEL_LINE_HEIGHT);
  color: var(--DEFAULT_LINK_COLOR);
  font-weight: 700;

  &:hover {
    color: ${({ as }) =>
      as === "a"
        ? "var(--DEFAULT_LINK_COLOR_HOVER)"
        : "var(--DEFAULT_LINK_COLOR)"};
    text-decoration: ${({ as }) => (as === "a" ? "underline" : "none")};
  }

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_LABEL_FONT_SIZE_MOBILE);
    line-height: var(--DEFAULT_LIST_ITEM_LABEL_LINE_HEIGHT_MOBILE);
  }
`

export const EventInfos = styled.div`
  display: flex;
  align-items: center;
`

export const EventLocation = styled.address`
  font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE);
  color: var(--DEFAULT_TEXT_COLOR);
  opacity: var(--DEFAULT_TEXT_OPACITY);

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE_MOBILE);
    display: none;
  }
`

export const EventDate = styled.time`
  font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE);
  color: var(--DEFAULT_TEXT_COLOR);
  opacity: var(--DEFAULT_TEXT_OPACITY);

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE_MOBILE);
  }
`

export const EventName = styled.p`
  font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE);
  color: var(--DEFAULT_TEXT_COLOR);
  opacity: var(--DEFAULT_TEXT_OPACITY);

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE_MOBILE);
  }
`

export const Separator = styled.span`
  margin: 0 6px;
  color: var(--DEFAULT_TEXT_COLOR);

  @media screen and (max-width: 440px) {
    display: ${({ hide }) => (hide ? "none" : "inline-block")};
  }
`
