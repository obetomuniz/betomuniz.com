import styled from "styled-components"

export const Container = styled.ul`
  display: flex;
`

export const SocialsItem = styled.li`
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  margin: 0;
  padding: 0;
  margin: 0 12px;
  svg {
    stroke-width: 0;
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: currentColor;
    color: ${({ color }) => color || "var(--DEFAULT_SOCIAL_THEME)"};
    transition: all 100ms linear;

    &:hover {
      color: var(--DEFAULT_LINK_COLOR_HOVER);
    }
  }
`

export const SocialsItemLink = styled.a`
  display: block;
`
