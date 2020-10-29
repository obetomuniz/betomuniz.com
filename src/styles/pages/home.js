import styled from "styled-components";
import { rem } from "polished";

export const SocialsContainer = styled.div`
  width: 550px;
  margin: var(--HORIZONTAL_MARGIN) auto 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const About = styled.main`
  text-align: center;
  width: 550px;
  margin: var(--HORIZONTAL_MARGIN) auto 0;
  p {
    font-size: ${rem("18px")};
    line-height: ${rem("44px")};

    &:first-child {
      &:first-letter {
        font-size: ${rem("32px")};
      }
    }
  }

  a {
    font-weight: bold;
  }

  @media screen and (max-width: 550px) {
    width: 100%;

    p {
      font-size: ${rem("16px")};
      line-height: ${rem("30px")};
    }
  }
`;

export const NewsletterContainer = styled.div`
  width: 550px;
  margin: 0 auto var(--HORIZONTAL_MARGIN);

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
