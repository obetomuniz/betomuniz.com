import styled from "styled-components"

export const PostPreviewListWrapper = styled.div`
  margin-top: var(--DEFAULT_MARGIN);

  @media screen and (max-width: 440px) {
    margin-top: calc(var(--DEFAULT_MARGIN_MOBILE) / 2);
  }
`

export const Container = styled.div``

export const Category = styled.p`
  font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE);
  color: var(${({ color }) => color});
  text-shadow: var(--DEFAULT_NAV_ITEM_TEXT_SHADOW);

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE_MOBILE);
  }
`
