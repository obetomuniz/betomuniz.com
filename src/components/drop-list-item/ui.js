import styled from 'styled-components';
import { rem, rgba } from 'polished';

export const Container = styled.li`
  display: flex;
  margin-bottom: calc(var(--HORIZONTAL_MARGIN) / 2.5);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CTA = styled.a`
  color: var(--ELETRIC_VIOLET);
  font-weight: 300;
  font-size: ${rem('16px')};
  line-height: ${rem('24px')};
  text-decoration: none;
  display: inline-block;
  text-shadow: 0 0 10px ${rgba('#000', 0.25)};
  letter-spacing: 0.04vw;

  &:before {
    content '💧';
    display: inline-block;
    vertical-align: middle;
    margin-right:  ${rem('8px')};
    font-size:  ${rem('10px')};
    filter: grayscale(1);
  }

  &:hover {
    text-decoration: underline;
    &:before {
      filter: grayscale(0);
    }
  }
`;
