import styled from "styled-components"

import { TYPO, COLORS } from "../../constants"

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  padding: 0 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 440px) {
    margin-bottom: 25px;
  }
`

export const NameContainer = styled.h4`
  flex: 1;
`

export const Name = styled.a`
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

export const LogoContainer = styled.a`
  width: 40px;
  height: 40px;

  @media screen and (max-width: 440px) {
    width: 25px;
    height: 25px;
  }
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`
