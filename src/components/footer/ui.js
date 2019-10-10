import styled from "styled-components"

import { UI } from "../../constants"

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${UI.DEFAULT_MARGIN} 0;

  @media screen and (max-width: 440px) {
    padding: 0 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: ${UI.DEFAULT_MARGIN_MOBILE} 0;
  }
`

export const Socials = styled.ul`
  display: flex;
`

export const SocialsItem = styled.li``

export const SocialsIcon = styled.svg`
  margin: 0 12px;
  width: 1.1rem;
  height: 1.1rem;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  color: #777777;
  transition: all 200ms linear;

  &:hover {
    color: #000000;
  }
`
