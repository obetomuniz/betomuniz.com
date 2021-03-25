import styled from 'styled-components';
import { rem } from 'polished';

export const Title = styled.h2`
  font-family: var(--FONT_FAMILY_SERIF);
  color: var(--ELETRIC_VIOLET);
  font-size: ${rem('42px')};
  text-align: center;
  font-weight: 700;
  text-decoration: underline;

  @media screen and (max-width: 600px) {
    font-size: ${rem('28px')};
  }
`;

export const List = styled.ul``;
