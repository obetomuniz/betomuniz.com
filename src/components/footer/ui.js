import styled from "styled-components";

export const Container = styled.footer`
  width: 765px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 440px) {
    width: 100%;
    padding: 0 10%;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
    padding: 0 10px;
  }
`;

export const Copyright = styled.small`
  font-size: 0.7rem;
  a {
    font-weight: bold;
  }
`;
