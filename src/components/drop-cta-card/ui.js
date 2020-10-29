import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.section`
  border-radius: ${rem("5px")};
  background-color: var(--PRIMARY_COLOR);
  padding: ${rem("30px")};
  margin-top: var(--HORIZONTAL_MARGIN);
  text-align: center;

  @media screen and (max-width: 550px) {
    padding: ${rem("14px")};
  }
`;

export const Text = styled.p`
  color: var(--WHITE_COLOR);
  font-size: ${rem("19px")};
  display: block;

  a {
    color: var(--WHITE_COLOR);
    text-decoration: underline;
    font-weight: bold;
  }

  @media screen and (max-width: 550px) {
    font-size: ${rem("15px")};
  }
`;

export const FeaturedText = styled.span`
  color: var(--FEATURED_TEXT);
  font-weight: bold;
`;
