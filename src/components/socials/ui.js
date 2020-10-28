import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const SocialsItem = styled.li`
  width: ${rem("40px")};
  height: ${rem("40px")};
  margin: 0;
  padding: 0;
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
    box-shadow: 2px 2px 0 1px var(--BLACK_SHADOW_COLOR);
    &:hover {
      color: var(--SECONDARY_COLOR);
    }
  }
`;

export const SocialsItemLink = styled.a`
  display: block;
`;
