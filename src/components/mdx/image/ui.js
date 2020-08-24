import styled from "styled-components"

export const Container = styled.figure`
  width: 100%;
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);

  @media screen and (max-width: 440px) {
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
  }

  img {
    min-height: auto;
    width: 100%;
    box-shadow: 0 10px 6px -8px var(--DEFAULT_BOX_SHADOW_COLOR);
    overflow: hidden;
    border-radius: 15px;
    margin: 0 auto 8px !important;
  }

  figcaption {
    font-size: 8px;
    text-align: right;
    width: 100%;
    display: block;
  }
`
