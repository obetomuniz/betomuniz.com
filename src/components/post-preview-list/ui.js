import styled from "styled-components"

export const PostPreviewListWrapper = styled.div`
  width: 550px;
  margin: 0 auto var(--DEFAULT_PAGE_LIST_MARGIN);

  @media screen and (max-width: 440px) {
    width: 100%;
    margin: 0 auto var(--DEFAULT_PAGE_LIST_MARGIN_MOBILE);
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
