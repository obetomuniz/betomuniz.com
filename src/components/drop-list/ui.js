import styled from 'styled-components';
import { rem } from 'polished';

export const Title = styled.h2`
  font-family: var(--FONT_FAMILY_SERIF);
  color: var(--ELETRIC_VIOLET);
  font-size: ${rem('42px')};
  font-weight: 700;
  text-align: center;
  text-decoration: underline;
  margin: var(--HORIZONTAL_MARGIN) auto;

  @media screen and (max-width: 600px) {
    font-size: ${rem('28px')};

    &:before {
      font-size: ${rem('14px')};
    }
  }
`;

export const List = styled.ul``;
