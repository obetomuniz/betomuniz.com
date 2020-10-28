import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";

export default createGlobalStyle`
  :root {
    /* Layout */
    --HORIZONTAL_MARGIN: 5rem;
    --HORIZONTAL_MARGIN_MOBILE: 3rem;

    /* Typo */
    --SAN_SERIF_FONTS: medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;

    /* Colors */
    --BACKGROUND_COLOR: white;
    --PRIMARY_COLOR: rebeccapurple;
    --TITLE_COLOR: rebeccapurple;
    --TEXT_COLOR: black;
    --lINK_COLOR: ${rgba("black", 0.4)};
    --CATEGORY_TECH_COLOR: darkgreen;
    --CATEGORY_REMOTE_WORK_COLOR: dodgerblue;
    --CATEGORY_COMMUNITY_COLOR: deeppink;
    --CATEGORY_DEV_LIFESTYLE_COLOR: #9e7100;
    --CODE_TEXT_COLOR: black;
    --TWITTER_COLOR: #1da1f2;
    --LINKEDIN_COLOR: #0077b5;
    --TELEGRAM_COLOR: #32afed;
    --TWITCH_COLOR: #a970ff;
    --INSTAGRAM_COLOR: #c13584;
    --YOUTUBE_COLOR: red;
    --PURPLE_NEON_COLOR: blueviolet;
    --BLACK_COLOR: black;
  }
`;
