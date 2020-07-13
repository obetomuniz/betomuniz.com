import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto var(--DEFAULT_MARGIN);
  width: 765px;
  padding: 0 20px;

  @media screen and (max-width: 440px) {
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 0 calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5);
  }
`
