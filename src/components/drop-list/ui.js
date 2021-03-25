import styled from 'styled-components';
import { rem } from 'polished';

export const Title = styled.h2`
  font-family: var(--FONT_FAMILY_SERIF);
  color: var(--ELETRIC_VIOLET);
  font-size: ${rem('32px')};
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: calc(var(--HORIZONTAL_MARGIN) / 2);

  &:before {
    display: inline-block;
    text-decoration: none;
    font-size: ${rem('21px')};
    content: '#';
    font-family: var(--FONT_FAMILY_SANS);
    margin: 0 ${rem('12px')} 0 0;
    position: relative;
    text-shadow: 0 0 ${rem('10px')} rgb(0 0 0 / 30%);
    opacity: 0.2;
  }

  @media screen and (max-width: 600px) {
    font-size: ${rem('21px')};

    &:before {
      font-size: ${rem('14px')};
    }
  }
`;

export const List = styled.ul``;
