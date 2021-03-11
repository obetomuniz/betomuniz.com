import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.main`
  text-align: center;
  width: ${rem('550px')};
  margin: var(--HORIZONTAL_MARGIN) auto 0;
  font-family: var(--FONT_FAMILY_SERIF);

  strong {
    font-weight: bold;
  }

  p {
    font-size: ${rem('28px')};
    line-height: ${rem('48px')};

    &:first-child {
      /* margin-bottom: ${rem('25px')}; */
      &:first-letter {
        font-size: ${rem('48px')};
      }
    }
  }

  a {
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    p {
      font-size: 4.5vw;
      line-height: 7vw;

      &:first-child {
        /* margin-bottom: ${rem('25px')}; */
        &:first-letter {
          font-size: 10vw;
        }
      }
    }
  }
`;
