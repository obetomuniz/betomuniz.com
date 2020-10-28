import styled from "styled-components";

export const SocialsContainer = styled.div`
  width: 550px;
  margin: var(--HORIZONTAL_MARGIN) auto 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const Container = styled.section`
  width: 550px;
  margin: 0 auto;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const NewsletterContainer = styled.div`
  width: 550px;
  margin: 0 auto var(--HORIZONTAL_MARGIN);

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
