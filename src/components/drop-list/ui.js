import styled from "styled-components"

export const Container = styled.ul`
  margin-bottom: var(--DEFAULT_MARGIN);

  @media screen and (max-width: 440px) {
    margin-bottom: calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5);
  }
`
