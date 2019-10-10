import styled from "styled-components"

import { UI } from "../../constants"

export const Container = styled.div`
  width: 550px;
  margin: 0 auto;

  @media screen and (max-width: 440px) {
    width: 100%;
  }
`

export const Header = styled.section``

export const Title = styled.h1`
  color: #000000;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM};

  @media screen and (max-width: 440px) {
    font-size: 1.1rem;
    line-height: 2rem;
    margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE};
  }
`

export const Subtitle = styled.span`
  display: block;
  font-size: 1.9rem;

  @media screen and (max-width: 440px) {
    font-size: 0.9rem;
  }
`

export const Register = styled.small`
  font-size: 0.7rem;
  color: #aaaaaa;
  font-family: "Tahoma", sans-serif;
  display: block;
  text-align: center;
  margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM};

  @media screen and (max-width: 440px) {
    font-size: 0.5rem;
    margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE};
  }
`

export const RegisterDate = styled.time`
  display: inline;
`

export const RegisterReadingTime = styled.span`
  color: #777;
`

export const Content = styled.main`
  margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM};

  p {
    color: #333333;
    display: block;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0.01rem;
    margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM};

    code {
      background: #eeeeee;
      display: inline-block;
      padding: 0 5px;
      font-family: "Courier New", serif;
    }
  }

  small {
    color: #333333;
    display: block;
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1.4rem;
    letter-spacing: 0.01rem;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #000000;
    line-height: 2.3rem;
    font-family: "Arial", sans-serif;
    font-weight: bold;
    margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM};
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  a {
    color: #777777;
    font-weight: bold;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    box-shadow: 0 10px 6px -7px #999999;
  }

  ul,
  ol {
    padding: 0 0 0 15px;
    margin: 0 0 ${UI.DEFAULT_POST_MARGIN_BOTTOM} 15px;
    font-size: 0.9rem;
    color: #333333;
    line-height: 1.2rem;

    ul,
    ol {
      margin-bottom: 0;
    }

    li {
      margin-bottom: 5px;

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
    margin: 0 0 ${UI.DEFAULT_POST_MARGIN_BOTTOM} 15px;
    padding: 10px 0 10px 15px;
    border-left: 3px solid #cccccc;
    display: block;
    font-style: italic;

    p {
      margin-bottom: 0;
    }
  }

  .gatsby-highlight {
    box-shadow: 0 10px 6px -8px #bbbbbb;
    background-color: #282c34;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM};
  }

  pre {
    font-size: 0.9rem;
    width: 100%;
    -webkit-font-smoothing: auto;
    padding: 0;
    margin: 0;

    code {
      overflow-y: auto;
      background-color: transparent;
      padding: 0;
      line-height: 1.2rem;
    }
  }

  em {
    font-style: italic !important;
  }

  strong {
    font-weight: bolder !important;
  }

  hr {
    display: block;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #cccccc;
    margin-top: 0;
    margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM};
  }

  .post-video {
    min-height: 350px;
    margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM};
    box-shadow: 0 10px 6px -8px #bbbbbb;
  }

  @media screen and (max-width: 440px) {
    margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE};

    p {
      font-size: 0.9rem;
      line-height: 1.2rem;
      letter-spacing: 0.02rem;
      margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE};
    }

    small {
      font-size: 0.7rem;
      line-height: 1.2rem;
      letter-spacing: 0.02rem;
    }

    h1,
    h2,
    h3,
    h4 {
      line-height: 2rem;
      margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE};
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.7rem;
    }

    h4 {
      font-size: 1.4rem;
    }

    ul,
    ol {
      padding: 0;
      margin: 0 0 ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE} 15px;
      font-size: 0.7rem;
      line-height: 1.5rem;
    }

    blockquote {
      margin: 0 0 ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE} 15px;
    }

    .gatsby-highlight {
      padding: 10px;
      margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE};
    }

    pre {
      font-size: 0.7rem;

      code {
        line-height: 1rem;
      }
    }

    hr {
      margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE};
    }

    .post-video {
      margin-bottom: ${UI.DEFAULT_POST_MARGIN_BOTTOM_MOBILE};
    }
  }
`
