import styled from 'styled-components';
import { rem, rgba } from 'polished';

export const Container = styled.section`
  width: 550px;
  margin: var(--HORIZONTAL_MARGIN) auto;
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
    font-size: ${rem('24px')};
    line-height: ${rem('42px')};

    &:first-child {
      &:first-letter {
        font-size: ${rem('32px')};
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
      line-height: ${rem('30px')};
    }
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin: var(--HORIZONTAL_MARGIN) auto 0;
  border-radius: ${rem('10px')};
  overflow: hidden;
  box-shadow: 0 0 ${rem('30px')} ${rem('1px')} ${rgba('#000', 0.25)};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const StickyContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: ${rem('20px')} 0;
  background-color: var(--WHITE);
  box-shadow: 0 0 ${rem('50px')} ${rem('1px')} ${rgba('#000', 0.15)};

  @media screen and (max-width: 600px) {
    padding: ${rem('15px')} 0;
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
