import styled from "styled-components"

export const Container = styled.ul`
  width: 550px;
  margin: 0 auto var(--DEFAULT_PAGE_LIST_MARGIN);

  @media screen and (max-width: 440px) {
    width: 100%;
    margin: 0 auto var(--DEFAULT_PAGE_LIST_MARGIN_MOBILE);
  }
`
