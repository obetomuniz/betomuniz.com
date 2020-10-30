import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  display: flex;
  padding: ${rem("8px")} 2%;
  border-bottom: 1px solid var(--PRIMARY_COLOR);
  background-color: var(--WHITE_COLOR);
  z-index: 2;
  position: sticky;
  left: 0;
  top: 0;
  transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
  will-change: transform, opacity;
  margin-top: ${rem("-40px")};
`;
export const InnerContainer = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const Photo = styled.a`
  height: ${rem("20px")};
  width: ${rem("20px")};
  display: block;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
  margin-top: -1px;

  @media screen and (max-width: 550px) {
    margin-top: 0;
    box-shadow: none;
  }
`;

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  overflow: hidden;
`;

export const ShareButton = styled.button`
  cursor: pointer;
  position: fixed;
  display: block;
  border: 0;
  background-color: var(--PRIMARY_COLOR);
  border-radius: ${rem("100px")};
  color: var(--WHITE_COLOR);
  padding: ${rem("5px")} ${rem("10px")};
  left: 50%;
  transform: translateX(-50%);
  margin: -1px auto 0;
  font-family: var(--FONT_FAMILY);
  font-size: ${rem("12px")};

  &:hover {
    background-color: var(--SECONDARY_COLOR);
  }

  @media screen and (max-width: 550px) {
    font-size: ${rem("10px")};
    margin: 0 auto;
    box-shadow: none;
  }
`;

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const SocialsItem = styled.li`
  width: ${rem("24px")};
  height: ${rem("24px")};
  margin: 0 0 0 ${rem("8px")};
  padding: ${rem("2px")};
  border-radius: 100%;
  margin-top: -1px;

  svg {
    stroke-width: 0;
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: currentColor;
    color: ${({ color }) => `var(${color})`};
    transition: all 100ms linear;
    border-radius: 100%;
    box-shadow: 0 0 0 1px var(--SECONDARY_COLOR);
    &:hover {
      color: var(--SECONDARY_COLOR);
    }

    @media screen and (max-width: 550px) {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 550px) {
    margin-top: 0;
  }
`;

export const SocialsItemLink = styled.a`
  display: block;
`;
