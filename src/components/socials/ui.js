import styled from "styled-components";
import { rem, rgba } from "polished";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const SocialsItem = styled.li`
  width: ${rem("56px")};
  height: ${rem("56px")};
  padding: ${rem("5px")};
  margin: 0 ${rem("12px")};
  border-radius: 100%;

  svg {
    stroke-width: 0;
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: currentColor;
    color: ${({ color }) => `var(${color})`};
    transition: all 100ms linear;
    border-radius: 100%;
    box-shadow: 0 0 ${rem("30px")} ${rem("5px")} ${rgba("#000", 0.25)};
    &:hover {
      color: var(--SECONDARY_COLOR);
    }
  }
`;

export const SocialsItemLink = styled.a`
  display: block;
`;
