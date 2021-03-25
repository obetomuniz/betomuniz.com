import styled from 'styled-components';
import { rem, rgba } from 'polished';

export const Container = styled.section`
  border-radius: ${rem('5px')};
  background-color: var(--REBECCA_PURPLE);
  padding: ${rem('30px')};
  margin: var(--HORIZONTAL_MARGIN) 0;
  text-align: center;
  box-shadow: 0 0 ${rem('30px')} ${rem('5px')} ${rgba('#000', 0.2)};
  @media screen and (max-width: 600px) {
    padding: ${rem('14px')};
  }
`;

export const Text = styled.p`
  color: var(--WHITE);
  font-size: ${rem('20px')};
  display: block;
  text-shadow: 0 0 15px ${rgba('#000', 0.8)};

  a {
    color: var(--WHITE);
    text-decoration: underline;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.5vw;
  }
`;

export const FeaturedText = styled.span`
  color: var(--MAXIMUM_YELLOW);
  font-weight: bold;
`;
