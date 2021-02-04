import styled from "styled-components";
import { rem, rgba } from "polished";

export const Container = styled.section`
  border-radius: ${rem("5px")};
  background-color: var(--PRIMARY_COLOR);
  padding: ${rem("30px")};
  margin-top: var(--HORIZONTAL_MARGIN);
  text-align: center;
  box-shadow: 0 0 ${rem("30px")} ${rem("5px")} ${rgba("#000", 0.2)};

  @media screen and (max-width: 600px) {
    padding: ${rem("14px")};
  }
`;

export const Text = styled.p`
  color: var(--WHITE_COLOR);
  font-size: ${rem("19px")};
  display: block;
  text-shadow: 0 0 15px ${rgba("#000", 0.8)};

  a {
    color: var(--WHITE_COLOR);
    text-decoration: underline;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    font-size: ${rem("15px")};
  }
`;

export const FeaturedText = styled.span`
  color: var(--FEATURED_TEXT);
  font-weight: bold;
`;
