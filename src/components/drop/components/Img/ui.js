import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.span`
  display: block;
  border-radius: ${rem('5px')};
  overflow: hidden;
  margin: 0 0 var(--LINE_BREAK_SPACE) 0;
  img {
    min-height: auto;
    width: 100%;
    border-radius: ${rem('5px')};
    overflow: hidden;
    border: ${rem('1px')} solid var(--LINK_COLOR);
  }
`;

export const Caption = styled.small`
  font-size: ${rem('8px')} !important;
  line-height: ${rem('20px')} !important;
  text-align: right;
  width: 100%;
  display: block;
`;
