import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  margin-bottom: var(--LINE_BREAK_SPACE);
`;

export const Container = styled.video`
  min-height: auto;
  border-radius: 15px;
  overflow: hidden;
  margin: 0 auto 0 !important;
`;

export const Caption = styled.small`
  font-size: ${rem("8px")} !important;
  line-height: ${rem("20px")} !important;
  text-align: right;
  width: 100%;
  display: block;
`;
