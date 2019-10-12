import React from "react"

import {
  Container,
  Photo,
  PhotoImage,
  Nav,
  NavList,
  NavListItem,
  NavLink,
} from "./ui"

const Header = ({ location }) => {
  return (
    <Container>
      <Photo to="/">
        <PhotoImage
          alt="Beto Muniz"
          src="https://www.gravatar.com/avatar/fff7258836f20ea66b061b49a51fe8dd?s=170"
        />
      </Photo>
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink to="/" activeClassName={"active"}>
              About
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/blog/" activeClassName={"active"}>
              Blog
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/projects/" activeClassName={"active"}>
              Projects
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/talks/" activeClassName={"active"}>
              Talks
            </NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </Container>
  )
}

export default Header
