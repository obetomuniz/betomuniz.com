import styled from "styled-components";
import { rem, rgba } from "polished";

export const Container = styled.main`
  width: 550px;
  margin-top: var(--HORIZONTAL_MARGIN);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: calc(var(--HORIZONTAL_MARGIN) / 3);

  @media screen and (max-width: 600px) {
    grid-gap: calc(var(--HORIZONTAL_MARGIN) / 2.5);
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
export const About = styled.main`
  text-align: center;
  width: 550px;
  margin: var(--HORIZONTAL_MARGIN) auto 0;

  strong {
    font-weight: bold;
  }

  p {
    font-size: ${rem("24px")};
    line-height: ${rem("42px")};

    &:first-child {
      &:first-letter {
        font-size: ${rem("32px")};
      }
    }
  }

  a {
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    p {
      font-size: 4vw;
      line-height: ${rem("30px")};
    }
  }
`;

export const StickyContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: ${rem("20px")} 0;
  background-color: var(--WHITE_COLOR);
  box-shadow: 0 0 ${rem("50px")} ${rem("1px")} ${rgba("#000", 0.15)};

  @media screen and (max-width: 600px) {
    padding: ${rem("15px")} 0;
    width: 100%;
  }
`;

export const NewsletterContainer = styled.div`
  width: 550px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
