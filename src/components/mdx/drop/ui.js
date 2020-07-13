import styled from "styled-components"

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid var(--DEFAULT_DROP_BORDER_COLOR);
  padding: var(--DEFAULT_POST_MARGIN_BOTTOM);
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);

  @media screen and (max-width: 440px) {
    border: 0;
    padding: 0;
  }
`
export const OriginalContentLink = styled.a`
  display: block;
  margin: 0 auto;
  width: 25px;
`
