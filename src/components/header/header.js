import React from "react"

import { Socials } from "../"
import {
  Container,
  Photo,
  PhotoImage,
  Nav,
  NavList,
  NavListItem,
  NavLink,
  SocialsContainer,
} from "./ui"

const Header = ({ location, hideSocialsOnHeader }) => {
  return (
    <Container>
      <Photo to="/">
        <PhotoImage
          loading="lazy"
          alt="Beto Muniz"
          src="https://www.gravatar.com/avatar/fff7258836f20ea66b061b49a51fe8dd?s=170"
          width="80"
          height="80"
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
            <NavLink
              to="/drops/"
              className={location === "/drops/" && "active"}
              activeClassName={"active"}
            >
              Drops
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              to="/videos/"
              className={location === "/videos/" && "active"}
              activeClassName={"active"}
            >
              Videos
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
      {!hideSocialsOnHeader && (
        <SocialsContainer>
          <Socials />
        </SocialsContainer>
      )}
    </Container>
  )
}

export default Header
