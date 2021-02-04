import styled from "styled-components";
import { rem, rgba } from "polished";

export const Container = styled.a`
  border-radius: ${rem("10px")};
  background-color: ${({ theme }) => `var(--${theme.bg})`};
  padding: ${rem("30px")};
  text-align: center;
  color: ${({ theme }) => `var(--${theme.color})`};
  display: block;
  font-size: ${rem("20px")};
  letter-spacing: ${rem("0.25px")};
  font-weight: bold;
  text-shadow: 0 0 15px ${rgba("#000", 0.8)};
  box-shadow: 0 0 ${rem("30px")} ${rem("5px")} ${rgba("#000", 0.2)};
  transform: scale3d(0.95, 0.95, 0.95);
  transition: transform ease-in-out 150ms;

  &:hover {
    transform: scale3d(1, 1, 1);
  }

  @media screen and (max-width: 600px) {
    padding: ${rem("18px")};
    font-size: ${rem("16px")};

    box-shadow: 0 0 30px 5px ${rgba("#000", 0.2)},
      inset 0 0 0 0 var(--WHITE_COLOR);
  }
`;

export const Text = styled.span`
  display: block;
`;
