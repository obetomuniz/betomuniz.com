import styled from "styled-components"

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  float: right;
  top: var(--DEFAULT_MARGIN);
  margin-top: 15px;

  @media screen and (max-width: 440px) {
    display: none;
  }
`

export const ShareLabel = styled.li`
  color: var(--DEFAULT_LINK_COLOR);
  opacity: var(--DEFAULT_TEXT_OPACITY);
  text-decoration: none;
  font-size: calc(var(--DEFAULT_NAV_ITEM_FONT_SIZE) / 1.2);
`

export const ShareItem = styled.li`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0;
  padding: 0;
  margin: 12px 0 0;

  svg {
    stroke-width: 0;
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: currentColor;
    color: var(--DEFAULT_SHARE_THEME);
    transition: all 100ms linear;

    &:hover {
      color: ${({ color }) => color || "var(--DEFAULT_SHARE_THEME)"};
    }
  }
`

export const ShareItemButton = styled.button`
  display: block;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  line-height: 0;
  border-radius: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  outline: 0;
`
