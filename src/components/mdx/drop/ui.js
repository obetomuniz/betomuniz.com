import styled from "styled-components"

export const Container = styled.div`
  border-radius: 15px;
  border: 1px solid var(--DEFAULT_DROP_BORDER_COLOR);
  padding: var(--DEFAULT_POST_MARGIN_BOTTOM) var(--DEFAULT_POST_MARGIN_BOTTOM) 0;
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);

  &:last-child {
    border-color: var(--DEFAULT_NEWSLETTER_THEME);
    margin: 0;
  }

  @media screen and (max-width: 440px) {
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
    padding: 0;
    border: 0;
    border-bottom: 1px solid var(--DEFAULT_DROP_BORDER_COLOR);
    border-radius: 0;
  }
`
