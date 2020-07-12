import styled from "styled-components"

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: var(--DEFAULT_LIST_ITEM_MARGIN) 0;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 440px) {
    margin: var(--DEFAULT_LIST_ITEM_MARGIN_MOBILE) 0;
  }
`

export const NameContainer = styled.h4`
  flex: 1;
`

export const Name = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: var(--DEFAULT_LIST_ITEM_LABEL_FONT_SIZE);
  line-height: var(--DEFAULT_LIST_ITEM_LABEL_LINE_HEIGHT);
  color: var(--DEFAULT_LINK_COLOR);
  font-weight: 700;

  &:hover {
    color: var(--DEFAULT_LINK_COLOR_HOVER);
    text-decoration: underline;
  }

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_LABEL_FONT_SIZE_MOBILE);
    line-height: var(--DEFAULT_LIST_ITEM_LABEL_LINE_HEIGHT_MOBILE);
  }
`

export const LogoContainer = styled.a`
  img {
    width: 40px;
    height: 40px;
  }

  svg {
    width: 42px;
    height: 40px;
    stroke: currentColor;
    fill: currentColor;
    color: var(--DEFAULT_PROJECT_GITHUB_COLOR);
  }

  @media screen and (max-width: 440px) {
    img {
      width: 25px;
      height: 25px;
    }

    svg {
      width: 27px;
      height: 25px;
    }
  }
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`
