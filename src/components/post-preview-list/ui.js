import styled from "styled-components"

export const PostPreviewListWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 440px) {
    flex-direction: column;
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
