import styled from "styled-components"

export const Container = styled.li`
  display: block;
  margin: 40px 0;

  @media screen and (max-width: 440px) {
    margin: 25px 0;
  }
`

export const Category = styled.p`
  font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE);
  color: var(${({ color }) => color});
  text-shadow: var(--DEFAULT_NAV_ITEM_TEXT_SHADOW);

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE_MOBILE);
  }
`

export const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: var(--DEFAULT_LIST_ITEM_LABEL_FONT_SIZE);
  line-height: var(--DEFAULT_LIST_ITEM_LABEL_LINE_HEIGHT);
  color: var(--DEFAULT_LINK_COLOR);
  font-weight: 700;
  text-shadow: var(--DEFAULT_NAV_ITEM_TEXT_SHADOW);

  &:hover {
    color: var(--DEFAULT_LINK_COLOR_HOVER);
    text-decoration: underline;
  }

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_LABEL_FONT_SIZE_MOBILE);
    line-height: var(--DEFAULT_LIST_ITEM_LABEL_LINE_HEIGHT_MOBILE);
  }
`
