import styled from "styled-components";
import { rem } from "polished";

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
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: transparent;
  color: var(--PRIMARY_COLOR);
  font-size: ${rem("16px")};
  padding: 10px;
  margin-right: 10px;
  border: 1px solid var(--PRIMARY_COLOR);
  flex: 1;
  text-align: center;
  display: block;
  height: 40px;
  ::-webkit-input-placeholder {
    color: var(--PRIMARY_COLOR);
  }
  ::-moz-placeholder {
    color: var(--PRIMARY_COLOR);
  }
  :-ms-input-placeholder {
    color: var(--PRIMARY_COLOR);
  }
  :-moz-placeholder {
    color: var(--PRIMARY_COLOR);
  }
  @media screen and (max-width: 550px) {
    margin: 0 10px 10px;
    border-radius: 5px;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  background-color: var(--PRIMARY_COLOR);
  border: 0;
  padding: 0;
  margin: 0;
  line-height: 0;
  display: block;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: var(--WHITE_COLOR);
  font-weight: 600;
  font-size: ${rem("16px")};
  width: 155px;
  &:hover {
    background-color: var(--SECONDARY_COLOR);
  }
  @media screen and (max-width: 550px) {
    width: calc(100% - 20px);
    height: 40px;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: none;
  }
`;

export const SubmittedMessage = styled.p`
  color: var(--PRIMARY_COLOR);
  font-size: ${rem("16px")};
  padding: 10px;
  height: 40px;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;
