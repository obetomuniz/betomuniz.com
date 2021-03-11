import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.footer`
  margin: 0 auto;
  padding: 0 20px var(--HORIZONTAL_MARGIN);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 4% var(--HORIZONTAL_MARGIN);
  }
`;

export const Copyright = styled.small`
  font-size: ${rem('12px')};
  font-family: var(--FONT_FAMILY_SERIF);

  a {
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    font-size: ${rem('10px')};
  }
`;
