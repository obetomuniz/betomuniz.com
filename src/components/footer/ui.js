import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 0 var(--DEFAULT_MARGIN);

  @media screen and (max-width: 440px) {
    padding: 0 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 0 calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5);
  }
`
