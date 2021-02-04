import styled from "styled-components";
import { rem, rgba } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  border-radius: ${rem("10px")};
  background-color: transparent;
  color: var(--SECONDARY_COLOR);
  font-size: ${rem("16px")};
  padding: ${rem("10px")};
  margin-right: ${rem("10px")};
  border: 1px solid var(--SECONDARY_COLOR);
  caret-color: var(--SECONDARY_COLOR);
  box-shadow: 0 0 ${rem("45px")} ${rem("5px")} ${rgba("#000", 0.1)};
  flex: 1;
  z-index: 2;
  text-align: center;
  display: block;
  height: ${rem("40px")};
  ::-webkit-input-placeholder {
    color: var(--SECONDARY_COLOR);
  }
  ::-moz-placeholder {
    color: var(--SECONDARY_COLOR);
  }
  :-ms-input-placeholder {
    color: var(--SECONDARY_COLOR);
  }
  :-moz-placeholder {
    color: var(--SECONDARY_COLOR);
  }
  @media screen and (max-width: 550px) {
    margin: 0 ${rem("20px")} ${rem("10px")};
  }
`;

export const Button = styled.button`
  background-color: var(--SECONDARY_COLOR);
  box-shadow: 0 0 ${rem("30px")} ${rem("5px")} ${rgba("#000", 0.2)};
  text-shadow: 0 0 20px ${rgba("#000", 0.8)};
  border: 0;
  padding: 0;
  margin: 0;
  line-height: 0;
  display: block;
  cursor: pointer;
  border-radius: ${rem("10px")};
  color: var(--WHITE_COLOR);
  font-weight: 600;
  font-size: ${rem("16px")};
  width: ${rem("155px")};
  &:hover {
    background-color: var(--SECONDARY_COLOR);
  }
  @media screen and (max-width: 550px) {
    width: calc(100% - ${rem("40px")});
    height: ${rem("40px")};
    margin: 0 auto;
  }
`;

export const SubmittedMessage = styled.p`
  color: var(--PRIMARY_COLOR);
  font-size: ${rem("16px")};
  padding: ${rem("10px")};
  height: ${rem("40px")};
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
    margin-bottom: ${rem("10px")};
  }
`;
