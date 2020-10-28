import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.li`
  display: block;
  margin: var(--HORIZONTAL_MARGIN) 0 0;
  &:first-child {
    margin-top: 0;
  }
  @media screen and (max-width: 550px) {
    margin: var(--HORIZONTAL_MARGIN_MOBILE) 0;
  }
`;

export const Category = styled.p`
  color: var(${({ color }) => color});
`;

export const A = styled.a`
  text-decoration: none;
  display: inline-block;
  color: var(--TEXT_COLOR);
  font-weight: 700;
  font-size: ${rem("24px")};
  line-height: ${rem("32px")};
  cursor: pointer;

  &:hover {
    color: var(--PRIMARY_COLOR);
    text-decoration: underline;
  }
`;
