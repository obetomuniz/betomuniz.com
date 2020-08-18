import styled from "styled-components"

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  float: right;
  top: var(--DEFAULT_MARGIN);
  margin-top: 15px;
`

export const ShareLabel = styled.button`
  color: white;
  background-color: var(--DEFAULT_SHARE_THEME);
  text-decoration: none;
  font-size: calc(var(--DEFAULT_NAV_ITEM_FONT_SIZE) / 1.2);
  border-radius: 7px;
  text-align: center;
  border: 0;
  text-transform: uppercase;
  padding: 10px;
  transform: rotate(45deg) scale3d(1, 1, 1) translateZ(0);
  transition: all 200ms ease;
  cursor: pointer;

  &:hover {
    transform: rotate(0) scale3d(1.3, 1.3, 1) translateZ(0);
  }

  @media screen and (max-width: 440px) {
    transform: rotate(0) scale3d(1, 1, 1) translateZ(0);
  }
`
