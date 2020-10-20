import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.main`
  width: 550px;
  margin: 0 auto var(--DEFAULT_PAGE_LIST_MARGIN);

  @media screen and (max-width: 440px) {
    width: 100%;
    margin: 0 auto var(--DEFAULT_PAGE_LIST_MARGIN_MOBILE);
  }
`

export const Text = styled.p`
  text-align: center;
  color: var(--DEFAULT_TEXT_COLOR);
  font-size: var(--DEFAULT_ABOUT_FONT_SIZE);
  line-height: var(--DEFAULT_ABOUT_LINE_HEIGHT);

  &:first-letter {
    font-size: var(--DEFAULT_FIRST_LETTER);
  }

  @media screen and (max-width: 440px) {
    font-size: 0.65rem;
    line-height: var(--DEFAULT_ABOUT_LINE_HEIGHT_MOBILE);

    &:first-letter {
      font-size: var(--DEFAULT_FIRST_LETTER_MOBILE);
    }
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
