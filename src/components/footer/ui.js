import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: var(--DEFAULT_MARGIN) 0;

  @media screen and (max-width: 440px) {
    padding: 0 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5) 0
      calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5);
  }
`

export const Socials = styled.ul`
  display: flex;
`

export const SocialsItem = styled.li``

export const SocialsIcon = styled.svg`
  margin: 0 12px;
  width: 1.15rem;
  height: 1.1rem;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  color: var(--DEFAULT_LINK_COLOR);
  transition: all 200ms linear;
  text-shadow: var(--DEFAULT_NAV_ITEM_TEXT_SHADOW);
  -webkit-filter: drop-shadow(var(--DEFAULT_NAV_ITEM_TEXT_SHADOW));
  filter: drop-shadow(var(--DEFAULT_NAV_ITEM_TEXT_SHADOW));

  &:hover {
    color: var(--DEFAULT_LINK_COLOR_HOVER);
  }
`
