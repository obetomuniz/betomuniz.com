import styled from "styled-components"

export const Wrapper = styled.div`
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);

  @media screen and (max-width: 440px) {
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
  }
`

export const Container = styled.video`
  min-height: auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 6px -8px var(--DEFAULT_BOX_SHADOW_COLOR);
  margin: 0 auto 0 !important;
`

export const Caption = styled.small`
  font-size: 8px !important;
  text-align: right;
  width: 100%;
  display: block;
`
