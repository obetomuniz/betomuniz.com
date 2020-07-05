import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.header`
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

export const Photo = styled(Link)`
  height: 80px;
  overflow: hidden;
  width: 80px;
  display: block;
  border-radius: 100%;
  margin-bottom: var(--DEFAULT_MARGIN);
  border: 2px solid var(--DEFAULT_HEADER_PHOTO_BORDER_COLOR);
  box-shadow: 0 10px 6px -8px var(--DEFAULT_BOX_SHADOW_COLOR);

  @media screen and (max-width: 440px) {
    margin-bottom: calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5);
  }
`

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
`

export const Nav = styled.nav`
  @media screen and (max-width: 440px) {
    width: 90%;
  }
`

export const NavList = styled.ul`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 15px;
  width: 400px;

  @media screen and (max-width: 440px) {
    width: 100%;
  }
`

export const NavListItem = styled.li`
  text-align: center;
`

export const NavLink = styled(Link)`
  color: var(--DEFAULT_LINK_COLOR);
  opacity: var(--DEFAULT_TEXT_OPACITY);
  text-decoration: none;
  font-size: var(--DEFAULT_NAV_ITEM_FONT_SIZE);

  &:hover,
  &.active {
    opacity: 1;
    color: var(--DEFAULT_LINK_COLOR_HOVER);
    font-weight: 700;
  }

  @media screen and (max-width: 440px) {
    font-size: 14px;
  }
`
