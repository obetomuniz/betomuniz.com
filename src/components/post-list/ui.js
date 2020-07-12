import styled from "styled-components"

export const Container = styled.ul`
  margin-bottom: var(--DEFAULT_PAGE_LIST_MARGIN);

  @media screen and (max-width: 440px) {
    margin-bottom: var(--DEFAULT_PAGE_LIST_MARGIN_MOBILE);
  }
`
