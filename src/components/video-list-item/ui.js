import styled from "styled-components"

export const Container = styled.li`
  margin: var(--DEFAULT_LIST_ITEM_MARGIN) 0;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 440px) {
    margin: var(--DEFAULT_LIST_ITEM_MARGIN_MOBILE) 0;
  }
`

export const Category = styled.p`
  font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE);
  color: var(${({ color }) => color});
  margin-bottom: 4px;

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE_MOBILE);
  }
`

export const Image = styled.img`
  box-shadow: 14px 14px black;
  width: min(100%, 550px);
  height: min(100%, 309px);
`
