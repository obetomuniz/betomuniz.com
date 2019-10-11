import styled from "styled-components"

import { TYPO, COLORS } from "../../constants"

export const Container = styled.li`
  display: block;
  margin: 40px 0;

  @media screen and (max-width: 440px) {
    margin: 25px 0;
  }
`

export const PostLink = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: ${TYPO.DEFAULT_LIST_ITEM_LABEL_FONT_SIZE};
  line-height: ${TYPO.DEFAULT_LIST_ITEM_LABEL_LINE_HEIGHT};
  color: ${COLORS.DEFAULT_LINK_COLOR};
  font-weight: 700;

  &:hover {
    color: ${COLORS.DEFAULT_LINK_COLOR_HOVER};
    text-decoration: underline;
  }

  @media screen and (max-width: 440px) {
    font-size: ${TYPO.DEFAULT_LIST_ITEM_LABEL_FONT_SIZE_MOBILE};
    line-height: ${TYPO.DEFAULT_LIST_ITEM_LABEL_LINE_HEIGHT_MOBILE};
  }
`
