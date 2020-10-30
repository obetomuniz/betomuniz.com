import styled, { css } from "styled-components";
import { rem } from "polished";

export const Title = styled.h1`
  font-family: var(--FONT_FAMILY);
  color: var(--PRIMARY_COLOR);
  font-size: ${rem("40px")};
  line-height: ${rem("60px")};
  text-align: center;
  font-weight: 700;
  margin-bottom: calc(var(--HORIZONTAL_MARGIN) / 3.5);

  @media screen and (max-width: 550px) {
    font-size: ${rem("38px")};
    line-height: ${rem("46px")};
  }
`;

export const Subtitle = styled.span`
  display: block;
  font-size: ${rem("28px")};
  line-height: ${rem("54px")};

  @media screen and (max-width: 550px) {
    font-size: ${rem("18px")};
  }
`;

const commonArticleStyles = css`
  > strong {
    font-weight: bold;
  }

  > a {
    color: var(--lINK_COLOR);
    text-decoration: underline;
    font-weight: bold;
  }

  > code {
    color: var(--BLACK_COLOR);
    background-color: var(--BACKGROUND_CODE_TEXT_COLOR);
    font-family: var(--FONT_FAMILY_INLINE_CODE);
    padding: 0 ${rem("3px")};
  }

  > del {
    color: var(--BLACK_COLOR);
  }

  > em {
    font-style: italic;
  }
`;

export const Article = styled.article`
  border: ${rem("1px")} solid var(--BORDER_COLOR);
  border-radius: ${rem("5px")};
  padding: var(--LINE_BREAK_SPACE) var(--LINE_BREAK_SPACE) 0
    var(--LINE_BREAK_SPACE);

  /* Titles */
  h2 {
    color: var(--BLACK_COLOR);
    font-size: ${rem("32px")};
    line-height: ${rem("54px")};
    font-weight: 700;
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;

    @media screen and (max-width: 550px) {
      font-size: ${rem("24px")};
      line-height: ${rem("36px")};
    }
  }
  h3 {
    color: var(--BLACK_COLOR);
    font-size: ${rem("28px")};
    line-height: ${rem("56px")};
    font-weight: 700;
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;

    @media screen and (max-width: 550px) {
      font-size: ${rem("18px")};
      line-height: ${rem("28px")};
    }
  }
  h4 {
    color: var(--BLACK_COLOR);
    font-size: ${rem("28px")};
    line-height: ${rem("36px")};
    font-weight: 700;
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;

    @media screen and (max-width: 550px) {
      font-size: ${rem("16px")};
      line-height: ${rem("28px")};
    }
  }
  h5 {
    color: var(--BLACK_COLOR);
    font-size: ${rem("24px")};
    line-height: ${rem("38px")};
    font-weight: 700;
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;

    @media screen and (max-width: 550px) {
      font-size: ${rem("14px")};
      line-height: ${rem("20px")};
    }
  }
  h6 {
    color: var(--BLACK_COLOR);
    font-size: ${rem("18px")};
    line-height: ${rem("30px")};
    font-weight: 700;
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;

    @media screen and (max-width: 550px) {
      font-size: ${rem("14px")};
      line-height: ${rem("20px")};
    }
  }

  /* Texts */
  > p {
    font-size: ${rem("18px")};
    line-height: ${rem("30px")};
    color: var(--BLACK_COLOR);
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;

    ${commonArticleStyles}

    > img {
      border-radius: ${rem("5px")};
      overflow: hidden;
      margin: 0 0 var(--LINE_BREAK_SPACE) 0;
      border: ${rem("1px")} solid var(--lINK_COLOR);
    }

    @media screen and (max-width: 550px) {
      font-size: ${rem("14px")};
      line-height: ${rem("20px")};
    }
  }

  /* Separator */
  > hr {
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;
  }

  /* Lists */
  > ul {
    margin: 0 0 var(--LINE_BREAK_SPACE) ${rem("30px")};
    list-style: circle;

    > li {
      color: var(--BLACK_COLOR);
      ${commonArticleStyles}
    }
  }

  > ol {
    margin: 0 0 var(--LINE_BREAK_SPACE) ${rem("30px")};
    list-style: decimal;
    > li {
      color: var(--BLACK_COLOR);
      ${commonArticleStyles}
    }
  }

  /* Quote */
  > blockquote {
    color: var(--BLACK_COLOR);
    margin: 0 0 var(--LINE_BREAK_SPACE) 0;

    > p {
      ${commonArticleStyles}
    }
  }

  /* Code */
  > pre {
    margin: 0 0 var(--LINE_BREAK_SPACE) 0 !important;
    border-radius: ${rem("5px")} !important;
  }

  @media screen and (max-width: 550px) {
    border: 0;
    border-top: ${rem("1px")} solid var(--BORDER_COLOR);
    border-bottom: ${rem("1px")} solid var(--BORDER_COLOR);
    border-radius: 0;
    padding: var(--HORIZONTAL_MARGIN) 0
      calc(var(--HORIZONTAL_MARGIN) - var(--LINE_BREAK_SPACE));
  }
`;
export const Metadata = styled.small`
  font-size: ${rem("12px")};
  display: block;
  text-align: center;
  font-family: var(--FONT_FAMILY_1);
  color: var(--TEXT_COLOR);
  margin-bottom: var(--HORIZONTAL_MARGIN);
`;

export const Category = styled.span`
  color: ${({ color }) => `var(${color})`};
`;

export const PublishDate = styled.time`
  color: var(--DATETIME_COLOR);
`;
