import styled from 'styled-components';
import { rem, rgba } from 'polished';

export const Container = styled.li`
  display: flex;
  margin-top: var(--HORIZONTAL_MARGIN);
`;

export const Thumb = styled.figure`
  width: 80px;
  display: block;

  img {
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0 0 ${rem('20px')} ${rem('5px')} ${rgba('#000', 0.25)};
  }
`;

export const Infos = styled.div`
  flex: 1;
  padding-left: ${rem('32px')};

  @media screen and (max-width: 600px) {
    padding-left: calc(4% + ${rem('10px')});
  }
`;

export const Name = styled.h3`
  color: var(--ELETRIC_VIOLET);
  font-weight: 700;
  font-size: ${rem('24px')};
  line-height: ${rem('30px')};

  @media screen and (max-width: 600px) {
    font-size: ${rem('20px')};
    line-height: ${rem('28px')};
  }
`;

export const Desc = styled.p`
  color: var(--EERIE_BLACK);
  font-weight: 100;
  margin: calc(var(--HORIZONTAL_MARGIN) / 5) auto;
  font-size: ${rem('16px')};
  line-height: ${rem('24px')};

  @media screen and (max-width: 600px) {
    font-size: ${rem('14px')};
    line-height: ${rem('20px')};
  }
`;

export const CTA = styled.a`
  color: var(--ELETRIC_VIOLET);
  font-weight: 100;
  font-size: ${rem('12px')};
  text-decoration: underline;
  display: inline-block;
`;
