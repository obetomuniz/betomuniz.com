import styled from "styled-components"
import { Link } from "gatsby"

import { UI, TYPO, COLORS } from "../../constants"

export const Container = styled.main`
  margin-bottom: ${UI.DEFAULT_MARGIN_MOBILE};
`

export const Text = styled.p`
  color: ${COLORS.DEFAULT_TEXT_COLOR};
  font-size: ${TYPO.DEFAULT_ABOUT_FONT_SIZE};
  line-height: ${TYPO.DEFAULT_ABOUT_LINE_HEIGHT};

  @media screen and (max-width: 440px) {
    font-size: ${TYPO.DEFAULT_ABOUT_FONT_SIZE_MOBILE};
    line-height: ${TYPO.DEFAULT_ABOUT_LINE_HEIGHT_MOBILE};
  }
`

export const TextLink = styled(Link)`
  color: ${COLORS.DEFAULT_TEXT_COLOR};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: ${COLORS.DEFAULT_LINK_COLOR_HOVER};
    text-decoration: underline;
  }
`
