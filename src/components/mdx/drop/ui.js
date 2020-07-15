import styled from "styled-components"

export const Container = styled.div`
  border-radius: 15px;
  border: 1px solid var(--DEFAULT_DROP_BORDER_COLOR);
  padding: var(--DEFAULT_POST_MARGIN_BOTTOM) var(--DEFAULT_POST_MARGIN_BOTTOM) 0;
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);

  @media screen and (max-width: 440px) {
    border: 0;
    padding: 0;
    margin-bottom: 0;
  }
`
