import styled from "styled-components"

export const PostPreviewListWrapper = styled.div`
  margin-bottom: var(--DEFAULT_MARGIN);

  @media screen and (max-width: 440px) {
    margin-bottom: calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5);
  }
`

export const Container = styled.div``

export const Category = styled.p`
  font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE);
  color: var(${({ color }) => color});

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE_MOBILE);
  }
`
