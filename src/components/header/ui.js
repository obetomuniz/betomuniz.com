import styled from "styled-components"
import { Link } from "gatsby"

import { UI } from "../../constants"

export const Container = styled.header`
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

export const Photo = styled(Link)`
  height: 80px;
  overflow: hidden;
  width: 80px;
  display: block;
  border-radius: 100%;
  margin-bottom: ${UI.DEFAULT_MARGIN};

  @media screen and (max-width: 440px) {
    margin-bottom: ${UI.DEFAULT_MARGIN_MOBILE};
  }
`

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
`

export const Nav = styled.nav``

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 300px;

  @media screen and (max-width: 440px) {
    width: 260px;
  }
`

export const NavListItem = styled.li`
  width: 70px;
  text-align: center;

  @media screen and (max-width: 440px) {
    width: 65px;
  }
`

export const NavLink = styled(Link)`
  color: #777777;
  text-decoration: none;
  font-size: 1rem;

  &:hover,
  &.active {
    color: darkblue;
    font-weight: 700;
  }
`
