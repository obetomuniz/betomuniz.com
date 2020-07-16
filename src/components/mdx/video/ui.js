import styled from "styled-components"

export const Container = styled.video`
  min-height: auto;
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 6px -8px var(--DEFAULT_BOX_SHADOW_COLOR);

  @media screen and (max-width: 440px) {
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
  }
`
