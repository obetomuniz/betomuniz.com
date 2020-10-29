import styled, { css, keyframes } from "styled-components";
import { rem } from "polished";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
`;

const fadeIn = keyframes`
  0% { 
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% { 
    opacity: 1;
  }
`;

const slideLeft = keyframes`
  0% { 
    transform: translate3d(30px,0,0) scale3d(.1,.1,.1); 
  }
  50% {
    transform: translate3d(30px,0,0) scale3d(.6,.6,.6); 
  }
  100% { 
    transform: translate3d(0,0,0) scale3d(1,1,1); 
  }
`;

const slideRight = keyframes`
  0% { 
    transform: scale3d(.1,.1,.1) translate3d(-30px,0,0);
  }
  50% {
    transform: translate3d(-30px,0,0) scale3d(.6,.6,.6); 
  }
  100% { 
    transform: translate3d(0,0,0) scale3d(1,1,1); 
  }
`;

export const SocialsItem = styled.li`
  width: ${rem("40px")};
  height: ${rem("40px")};
  padding: 0;
  margin: 0 ${rem("12px")};
  border-radius: 100%;
  opacity: ${({ animated }) => (animated ? "0" : "1")};
  will-change: opacity, transform;

  &:nth-child(2) {
    animation: ${({ animated }) =>
      animated
        ? css`
            ${fadeIn} 500ms ease-out forwards 1150ms,
      ${slideLeft} 500ms ease-in-out forwards 1150ms
          `
        : "none"};
  }

  &:nth-child(3) {
    animation: ${({ animated }) =>
      animated
        ? css`
            ${fadeIn} 500ms ease-out forwards 1s,
      ${slideLeft} 500ms ease-in-out forwards 1s
          `
        : "none"};
  }

  &:nth-child(4) {
    animation: ${({ animated }) =>
      animated
        ? css`
            ${fadeIn} 500ms ease-out forwards 1s,
      ${slideRight} 500ms ease-in-out forwards 1s
          `
        : "none"};
  }

  &:nth-child(5) {
    animation: ${({ animated }) =>
      animated
        ? css`
            ${fadeIn} 500ms ease-out forwards 1150ms,
      ${slideRight} 500ms ease-in-out forwards 1150ms
          `
        : "none"};
  }

  svg {
    stroke-width: 0;
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: currentColor;
    color: ${({ color }) => `var(${color})`};
    transition: all 100ms linear;
    border-radius: 100%;
    box-shadow: 2px 2px 0 1px var(--BLACK_SHADOW_COLOR);
    &:hover {
      color: var(--SECONDARY_COLOR);
    }
  }
`;

export const SocialsItemLink = styled.a`
  display: block;
`;

const zoomOut = keyframes`
  0% { 
    transform: scale3d(.1,.1,.1); 
    opacity: 0;
  }
  75% {
    opacity: 1; 
    transform: scale3d(1, 1, 1);
  }
  100% { 
    opacity: 0;
    transform: scale3d(2.5,2.5,2.5); 
  }
`;

export const PhotoContainer = styled.li`
  position: absolute;
  left: 0;
  right: 0;
  padding: 0;
  margin: ${rem("-5px")} auto;
  width: ${rem("50px")};
  height: ${rem("50px")};
  will-change: opacity, transform;
  animation: ${({ animated }) =>
    animated
      ? css`
          ${zoomOut} 1.6s ease-out forwards
        `
      : "none"};
  opacity: 0;
  display: ${({ animated }) => (animated ? "block" : "none")};
  transform: ${({ animated }) =>
    animated ? "scale3d(0.1, 0.1, 0.1)" : "none"};
`;

export const Photo = styled.picture`
  height: 100%;
  width: 100%;
  display: block;
  border-radius: 100%;
  position: relative;
  box-shadow: 3px 3px 0 1px var(--BLACK_SHADOW_COLOR);
`;

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  overflow: hidden;
`;
