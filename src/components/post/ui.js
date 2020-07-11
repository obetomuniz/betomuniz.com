import styled from "styled-components"

export const Container = styled.article`
  width: 550px;
  margin: 0 auto var(--DEFAULT_MARGIN);

  @media scrvar(--DEFAULT_MARGIN) autoeen and (max-width: 440px) {
    width: 100%;
  }
`

export const Header = styled.section``

export const Title = styled.h1`
  font-family: var(--DEFAULT_POST_TITLE_FONT_FAMILY);
  color: var(--DEFAULT_POST_TITLE_COLOR);
  font-size: var(--DEFAULT_POST_TITLE_FONT_SIZE);
  line-height: var(--DEFAULT_POST_TITLE_LINE_HEIGHT);
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);
  text-align: center;
  font-weight: 700;

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_POST_TITLE_FONT_SIZE_MOBILE);
    line-height: var(--DEFAULT_POST_TITLE_LINE_HEIGHT_MOBILE);
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
  }
`

export const Subtitle = styled.span`
  font-family: var(--DEFAULT_POST_TITLE_FONT_FAMILY);
  font-size: var(--DEFAULT_POST_SUBTITLE_FONT_SIZE);
  display: block;

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_POST_SUBTITLE_FONT_SIZE_MOBILE);
  }
`

export const Register = styled.small`
  font-size: var(--DEFAULT_POST_REGISTER_FONT_SIZE);
  color: var(--DEFAULT_TEXT_COLOR);
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);
  font-family: "Tahoma", sans-serif;
  display: block;
  text-align: center;

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_POST_REGISTER_FONT_SIZE_MOBILE);
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
  }
`

export const RegisterDate = styled.time`
  opacity: 0.8;
`

export const RegisterReadingTime = styled.span`
  opacity: var(--DEFAULT_TEXT_OPACITY);
`

export const RegisterCategory = styled.span`
  font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE);
  color: var(${({ color }) => color});

  @media screen and (max-width: 440px) {
    font-size: var(--DEFAULT_LIST_ITEM_DETAIL_FONT_SIZE_MOBILE);
  }
`

export const Content = styled.div`
  margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);

  p {
    color: var(--DEFAULT_POST_TEXT_COLOR);
    font-size: var(--DEFAULT_POST_TEXT_FONT_SIZE);
    line-height: var(--DEFAULT_POST_TEXT_LINE_HEIGHT);
    letter-spacing: var(--DEFAULT_POST_TEXT_LETTER_SPACING);
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);
    display: block;
    font-weight: 400;

    code {
      background-color: var(--DEFAULT_POST_CODE_BACKGROUND_COLOR);
      color: var(--DEFAULT_POST_CODE_TEXT_COLOR);
      font-family: var(--DEFAULT_CODE_FONTS);
      display: inline-block;
      padding: 0 8px;
    }
  }

  small {
    color: var(--DEFAULT_POST_TEXT_COLOR);
    font-size: var(--DEFAULT_POST_SMALL_TEXT_FONT_SIZE);
    line-height: var(--DEFAULT_POST_SMALL_TEXT_LINE_HEIGHT);
    letter-spacing: var(--DEFAULT_POST_TEXT_LETTER_SPACING);
    display: block;
    font-weight: 400;
  }

  h2,
  h3,
  h4 {
    font-family: var(--DEFAULT_POST_TITLE_FONT_FAMILY);
    color: var(--DEFAULT_POST_TITLE_COLOR);
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);
    line-height: var(--DEFAULT_POST_SECONDARY_TITLE_LINE_HEIGHT);
    font-weight: 700;

    code {
      background-color: var(--DEFAULT_POST_CODE_BACKGROUND_COLOR);
      color: var(--DEFAULT_POST_CODE_TEXT_COLOR);
      font-family: var(--DEFAULT_CODE_FONTS);
      display: inline-block;
      padding: 0 8px;
    }
  }

  h2 {
    font-size: var(--DEFAULT_POST_SECONDARY_TITLE_LINE_HEIGHT_MOBILE);
  }

  h3 {
    font-size: var(--DEFAULT_POST_H3_FONT_SIZE);
  }

  h4 {
    font-size: var(--DEFAULT_POST_H4_FONT_SIZE);
  }

  a {
    color: var(--DEFAULT_LINK_COLOR);
    opacity: var(--DEFAULT_TEXT_OPACITY);
    font-weight: 700;
    word-break: break-word;
    text-decoration: underline;
  }

  img {
    border-radius: var(--DEFAULT_BORDER_RADIUS);
    max-width: 100%;
    display: block;
    margin: 0 auto var(--DEFAULT_POST_MARGIN_BOTTOM);
    box-shadow: 0 10px 6px -7px var(--DEFAULT_BOX_SHADOW_COLOR);
  }

  ul,
  ol {
    margin: 0 0 var(--DEFAULT_POST_MARGIN_BOTTOM) 15px;
    line-height: var(--DEFAULT_POST_LIST_ITEM_LINE_HEIGHT);
    font-size: var(--DEFAULT_POST_LIST_ITEM_FONT_SIZE);
    color: var(--DEFAULT_POST_LIST_ITEM_COLOR);
    padding: 0 0 0 15px;

    ul,
    ol {
      margin-bottom: 0;
    }

    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: circle;
  }

  blockquote {
    color: var(--DEFAULT_POST_BLOCKQUOTE_TEXT_COLOR);
    border-left: 3px solid var(--DEFAULT_BLOCKQUOTE_COLOR);
    margin: 0 0 var(--DEFAULT_POST_MARGIN_BOTTOM) 15px;
    padding: 10px 0 10px 15px;
    display: block;
    font-style: italic;

    p {
      margin-bottom: 0;
    }
  }

  .gatsby-highlight {
    border-radius: var(--DEFAULT_BORDER_RADIUS);
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);
    background-color: var(--DEFAULT_POST_CODE_DEMO_BACKGROUND);
    box-shadow: 0 10px 6px -8px var(--DEFAULT_BOX_SHADOW_COLOR);
    padding: 20px;
  }

  pre {
    font-size: var(--DEFAULT_POST_CODE_DEMO_FONT_SIZE);
    width: 100%;
    padding: 0;
    margin: 0;

    code {
      line-height: var(--DEFAULT_POST_CODE_DEMO_LINE_HEIGHT);
      overflow-y: auto;
      background-color: transparent;
      padding: 0;
    }
  }

  em {
    font-style: italic !important;
  }

  strong {
    font-weight: bolder !important;
  }

  hr {
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);
    display: block;
    width: 100%;
    border: 0;
    margin-top: 0;
    border-bottom: 1px solid var(--DEFAULT_POST_HR_COLOR);
  }

  .post-video {
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM);
    box-shadow: 0 10px 6px -8px var(--DEFAULT_BOX_SHADOW_COLOR);
    min-height: 350px;
  }

  @media screen and (max-width: 440px) {
    margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);

    p {
      font-size: var(--DEFAULT_POST_TEXT_FONT_SIZE_MOBILE);
      line-height: var(--DEFAULT_POST_TEXT_LINE_HEIGHT_MOBILE);
      letter-spacing: var(--DEFAULT_POST_TEXT_LETTER_SPACING_MOBILE);
      margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
    }

    small {
      font-size: var(--DEFAULT_POST_SMALL_TEXT_FONT_SIZE_MOBILE);
      line-height: var(--DEFAULT_POST_SMALL_TEXT_LINE_HEIGHT_MOBILE);
      letter-spacing: var(--DEFAULT_POST_TEXT_LETTER_SPACING_MOBILE);
    }

    h1,
    h2,
    h3,
    h4 {
      line-height: var(--DEFAULT_POST_SECONDARY_TITLE_LINE_HEIGHT_MOBILE);
      margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
    }

    h2 {
      font-size: var(--DEFAULT_POST_H2_FONT_SIZE_MOBILE);
    }

    h3 {
      font-size: var(--DEFAULT_POST_H3_FONT_SIZE_MOBILE);
    }

    h4 {
      font-size: var(--DEFAULT_POST_H4_FONT_SIZE_MOBILE);
    }

    img {
      margin: 0 auto var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
    }

    ul,
    ol {
      padding: 0;
      margin: 0 0 var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE) 15px;
      font-size: var(--DEFAULT_POST_LIST_ITEM_FONT_SIZE_MOBILE);
      line-height: var(--DEFAULT_POST_LIST_ITEM_LINE_HEIGHT_MOBILE);
    }

    blockquote {
      margin: 0 0 var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE) 15px;
    }

    .gatsby-highlight {
      padding: 10px;
      margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
    }

    pre {
      font-size: var(--DEFAULT_POST_CODE_DEMO_FONT_SIZE_MOBILE);

      code {
        line-height: var(--DEFAULT_POST_CODE_DEMO_LINE_HEIGHT_MOBILE);
      }
    }

    hr {
      margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
    }

    .post-video {
      margin-bottom: var(--DEFAULT_POST_MARGIN_BOTTOM_MOBILE);
    }
  }
`
