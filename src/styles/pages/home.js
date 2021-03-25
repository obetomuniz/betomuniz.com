import styled from 'styled-components';
import { rem } from 'polished';

export const SocialsContainer = styled.div`
  width: ${rem('550px')};
  margin: var(--HORIZONTAL_MARGIN) auto 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const NewsletterContainer = styled.section`
  width: ${rem('550px')};
  margin: var(--HORIZONTAL_MARGIN) auto 0;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ProjectsContainer = styled.section`
  width: ${rem('550px')};
  margin: var(--HORIZONTAL_MARGIN) auto 0;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const DropsContainer = styled.section`
  width: ${rem('550px')};
  margin: var(--HORIZONTAL_MARGIN) auto 0;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const FooterContainer = styled.div`
  width: ${rem('550px')};
  margin: var(--HORIZONTAL_MARGIN) auto 0;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
