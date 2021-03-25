import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const Title = styled.h1`
  font-family: var(--FONT_FAMILY_SERIF);
  color: var(--ELETRIC_VIOLET);
  font-size: ${rem('44px')};
  line-height: ${rem('60px')};
  text-align: center;
  font-weight: 700;
  margin-bottom: calc(var(--HORIZONTAL_MARGIN) / 3.5);
  @media screen and (max-width: 600px) {
    font-size: ${rem('38px')};
    line-height: ${rem('46px')};
  }
`;

// export const Subtitle = styled.span`
//   display: block;
//   font-size: ${rem('28px')};
//   line-height: ${rem('54px')};
//   @media screen and (max-width: 600px) {
//     font-size: ${rem('18px')};
//   }
// `;

const commonArticleStyles = css`
  > strong {
    font-weight: bold;
  }
  > a {
    color: var(--ELETRIC_VIOLET);
    text-decoration: underline;
    font-weight: bold;
  }
  > code {
    color: var(--BLACK);
    background-color: var(--BACKGROUND_CODE_TEXT_COLOR);
    font-family: var(--FONT_FAMILY_INLINE_CODE);
    padding: 0 ${rem('3px')};
  }
  > del {
    color: var(--BLACK);
  }
  > em {
    font-style: italic;
    > strong {
      font-weight: bold;
    }
    > a {
      color: var(--ELETRIC_VIOLET);
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

export const Article = styled.article`
  border-radius: ${rem('5px')};
  margin-bottom: var(--HORIZONTAL_MARGIN);
  /* Titles */
  h2 {
    color: var(--BLACK);
    font-size: ${rem('32px')};
    line-height: ${rem('54px')};
    font-weight: 700;
    font-family: var(--FONT_FAMILY_SERIF);
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
    @media screen and (max-width: 600px) {
      font-size: ${rem('24px')};
      line-height: ${rem('36px')};
    }
  }
  h3 {
    color: var(--BLACK);
    font-size: ${rem('28px')};
    line-height: ${rem('56px')};
    font-weight: 700;
    font-family: var(--FONT_FAMILY_SERIF);
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
    @media screen and (max-width: 600px) {
      font-size: ${rem('18px')};
      line-height: ${rem('28px')};
    }
  }
  h4 {
    color: var(--BLACK);
    font-size: ${rem('28px')};
    line-height: ${rem('36px')};
    font-weight: 700;
    font-family: var(--FONT_FAMILY_SERIF);
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
    @media screen and (max-width: 600px) {
      font-size: ${rem('16px')};
      line-height: ${rem('28px')};
    }
  }
  h5 {
    color: var(--BLACK);
    font-size: ${rem('24px')};
    line-height: ${rem('38px')};
    font-weight: 700;
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
    @media screen and (max-width: 600px) {
      font-size: ${rem('14px')};
      line-height: ${rem('20px')};
    }
  }
  h6 {
    color: var(--BLACK);
    font-size: ${rem('18px')};
    line-height: ${rem('30px')};
    font-weight: 700;
    font-family: var(--FONT_FAMILY_SERIF);
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
    @media screen and (max-width: 600px) {
      font-size: ${rem('14px')};
      line-height: ${rem('20px')};
    }
  }
  /* Texts */
  > p {
    font-size: ${rem('20px')};
    line-height: ${rem('30px')};
    color: var(--BLACK);
    font-family: var(--FONT_FAMILY_SERIF);
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
    ${commonArticleStyles}
    @media screen and (max-width: 600px) {
      font-size: ${rem('16px')};
      line-height: ${rem('20px')};
    }
  }
  /* Separator */
  > hr {
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
  }
  /* Lists */
  > ul {
    margin: 0 0 var(--LINE_BREAK_SPACE) ${rem('30px')};
    list-style: circle;
    > li {
      color: var(--BLACK);
      ${commonArticleStyles}
    }
  }
  > ol {
    margin: 0 0 var(--LINE_BREAK_SPACE) ${rem('30px')};
    list-style: decimal;
    > li {
      color: var(--BLACK);
      ${commonArticleStyles}
    }
  }
  /* Quote */
  > blockquote {
    color: var(--BLACK);
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
    > p {
      ${commonArticleStyles}
    }
  }
  /* Code */
  > pre {
    margin: 0 0 var(--LINE_BREAK_SPACE) 0 !important;
    border-radius: ${rem('5px')} !important;
  }
  @media screen and (max-width: 600px) {
    border: 0;
    border-top: ${rem('1px')} solid var(--BORDER_COLOR);
    border-bottom: ${rem('1px')} solid var(--BORDER_COLOR);
    border-radius: 0;
  }
`;
export const Metadata = styled.small`
  font-size: ${rem('12px')};
  display: block;
  text-align: center;
  font-family: var(--FONT_FAMILY_SANS);
  color: var(--BLACK);
  margin-bottom: var(--HORIZONTAL_MARGIN);
`;

export const PublishDate = styled.time`
  color: var(--BLACK);
`;
