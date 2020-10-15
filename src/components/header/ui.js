import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const glitch1 = keyframes`
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`

const glitch2 = keyframes`
  0% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  7% {
    filter: hue-rotate(240deg);
    transform: translate3d(-2px, -3px, 0);
    opacity: 0.5;
  }
  10% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  27% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  30% {
    filter: hue-rotate(240deg);
    transform: translate3d(-5px, -2px, 0);
    opacity: 0.5;
  }
  35% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  52% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  55% {
    filter: hue-rotate(240deg);
    transform: translate3d(-5px, -1px, 0);
    opacity: 0.5;
  }
  50% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  72% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  75% {
    filter: hue-rotate(240deg);
    transform: translate3d(-2px, -6px, 0);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0;
  }
  100% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
`

const glitch3 = keyframes`
  0% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  7% {
    filter: hue-rotate(60deg);
    transform: translate3d(2px, 3px, 0);
    opacity: 0.5;
  }
  10% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  27% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  30% {
    filter: hue-rotate(60deg);
    transform: translate3d(5px, 2px, 0);
    opacity: 0.5;
  }
  35% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  52% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  55% {
    filter: hue-rotate(60deg);
    transform: translate3d(5px, 1px, 0);
    opacity: 0.5;
  }
  50% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  72% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  75% {
    filter: hue-rotate(60deg);
    transform: translate3d(2px, 6px, 0);
    opacity: 0.5;
  }
  80% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
  100% {
    filter: hue-rotate(0deg);
    transform: none;
    opacity: 0;
  }
`

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

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  overflow: hidden;
  /* animation: ${glitch1} 10s infinite linear; */
  border: 2px solid var(--DEFAULT_HEADER_PHOTO_BORDER_COLOR);
  z-index: 2;
`

export const Photo = styled(Link)`
  height: 80px;
  width: 80px;
  display: block;
  border-radius: 100%;
  position: relative;
  /* box-shadow: 0 10px 6px -8px var(--DEFAULT_BOX_SHADOW_COLOR); */
  box-shadow: 3px 3px 0 1px rgba(0, 0, 0, 1);

  /* &::before,
  &::after {
    background-image: url("https://www.gravatar.com/avatar/fff7258836f20ea66b061b49a51fe8dd?s=170");
    background-size: cover;
    animation: ${glitch2} 10s infinite linear;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 100%;
    border: 2px solid var(--DEFAULT_HEADER_PHOTO_BORDER_COLOR);
    z-index: 2;
    content: "";
  } */

  /* &::after {
    animation: ${glitch3} 10s infinite linear;
  } */
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

export const SocialsContainer = styled.div`
  margin-top: var(--DEFAULT_MARGIN);

  @media screen and (max-width: 440px) {
    margin-top: calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5);
  }
`
