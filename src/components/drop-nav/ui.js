import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.a`
  position: fixed;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: ${rem("60px")};
  height: ${rem("60px")};
  background-color: var(--WHITE_COLOR);
  padding: ${rem("10px")};
  cursor: pointer;
  display: block;

  svg {
    height: 100%;
    width: 100%;
    position: relative;
    left: ${({ left }) => (left ? rem("-3px") : rem("3px"))};
    transform: rotate(${({ left }) => (left ? "180deg" : "0")});
    fill: var(--PRIMARY_COLOR);
  }

  @media screen and (max-width: 600px) {
    width: ${rem("40px")};
    height: ${rem("40px")};
  }
`;
