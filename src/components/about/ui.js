import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.main``

export const Text = styled.p`
  color: var(--DEFAULT_TEXT_COLOR);
  font-size: var(--DEFAULT_ABOUT_FONT_SIZE);
  line-height: var(--DEFAULT_ABOUT_LINE_HEIGHT);

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_ABOUT_FONT_SIZE_MOBILE);
    line-height: var(--DEFAULT_ABOUT_LINE_HEIGHT_MOBILE);
  }
`

export const TextLink = styled(Link)`
  color: var(--DEFAULT_TEXT_COLOR);
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: var(--DEFAULT_LINK_COLOR_HOVER);
    text-decoration: underline;
  }
`
