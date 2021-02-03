import styled from "styled-components";
import { rem, rgba } from "polished";

export const Container = styled.header`
  margin: var(--HORIZONTAL_MARGIN) auto 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 0 4%;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
    padding: 0 10px;
  }
`;

export const Photo = styled.a`
  height: 80px;
  width: 80px;
  display: block;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 ${rem("30px")} ${rem("5px")} ${rgba("#000", 0.25)};
`;

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  overflow: hidden;
`;
