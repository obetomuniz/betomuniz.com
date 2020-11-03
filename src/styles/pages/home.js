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
  strong {
    font-weight: bold;
  }

  p {
    font-size: 1.684rem;
    line-height: 3rem;

    &:first-child {
      margin-bottom: ${rem("25px")};
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
      font-size: 1.056rem;
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
