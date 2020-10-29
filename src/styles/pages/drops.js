import styled from "styled-components";
import { rem } from "polished";

export const SocialsContainer = styled.header`
  width: 550px;
  margin: var(--HORIZONTAL_MARGIN) auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const Container = styled.main`
  width: 550px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const StickyContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: ${rem("30px")} 0;
  background-color: var(--WHITE_COLOR);
  border-top: 1px solid var(--PRIMARY_COLOR);

  @media screen and (max-width: 550px) {
    padding: ${rem("15px")} 0;
    width: 100%;
  }
`;

export const NewsletterContainer = styled.div`
  width: 550px;
  margin: 0 auto;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
