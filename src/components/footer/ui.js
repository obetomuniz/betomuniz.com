import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.footer`
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 0 10%;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
    padding: 0 10px;
  }
`;

export const Copyright = styled.small`
  font-size: ${rem("12px")};
  a {
    font-weight: bold;
  }

  @media screen and (max-width: 550px) {
    font-size: ${rem("10px")};
  }
`;
