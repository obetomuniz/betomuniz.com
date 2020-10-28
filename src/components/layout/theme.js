import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";

export default createGlobalStyle`
  :root {
    /* Colors */
    --BACKGROUND_COLOR: white;
    --PRIMARY_COLOR: rebeccapurple;
    --SECONDARY_COLOR: #9900FF;
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
    --WHITE_COLOR: white;
    --BLACK_COLOR: #22212C;
    --BLACK_SHADOW_COLOR: black;

        /* Layout */
    --HORIZONTAL_MARGIN: 5rem;
    --HORIZONTAL_MARGIN_MOBILE: 3rem;

    /* Typo */
    --FONT_FAMILY: medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;

  }
`;
