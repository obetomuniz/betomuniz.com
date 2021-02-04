import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.li`
  display: block;
  margin: calc(var(--HORIZONTAL_MARGIN) / 2.5) 0 0;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 600px) {
    margin: 1.2rem 0 0;
  }
`;

export const Category = styled.p`
  color: var(${({ color }) => color});
  font-size: ${rem("14px")};
  line-height: ${rem("20px")};

  @media screen and (max-width: 600px) {
    font-size: ${rem("12px")};
    line-height: ${rem("20px")};
  }
`;

export const A = styled.a`
  text-decoration: none;
  display: inline-block;
  color: var(--TEXT_COLOR);
  font-weight: 700;
  font-size: ${rem("24px")};
  line-height: ${rem("40px")};
  cursor: pointer;

  &:hover {
    color: var(--PRIMARY_COLOR);
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    font-size: ${rem("20px")};
    line-height: ${rem("28px")};
  }
`;
