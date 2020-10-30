import { createGlobalStyle } from "styled-components";
import { rgba, rem } from "polished";

export default createGlobalStyle`
  :root {
    /* Colors */
    --BACKGROUND_COLOR: white;
    --PRIMARY_COLOR: rebeccapurple;
    --SECONDARY_COLOR: #9900FF;
    --TITLE_COLOR: rebeccapurple;
    --TEXT_COLOR: black;
    --lINK_COLOR: #888;
    --DATETIME_COLOR: #444;
    --CATEGORY_TECH_COLOR: darkgreen;
    --CATEGORY_REMOTE_WORK_COLOR: dodgerblue;
    --CATEGORY_COMMUNITY_COLOR: deeppink;
    --CATEGORY_DEV_LIFESTYLE_COLOR: #9e7100;
    --CODE_TEXT_COLOR: black;
    --BACKGROUND_CODE_TEXT_COLOR: #eee;
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
    --BORDER_COLOR: #ddd;
    --FEATURED_TEXT: #EBFF00;

        /* Layout */
    --HORIZONTAL_MARGIN: 5rem;

    /* Typo */
    --FONT_FAMILY: medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
    --FONT_FAMILY_1: Tahoma, sans-serif;
    --FONT_FAMILY_INLINE_CODE: medium-content-sans-serif-font, "Courier New", serif;
    --LINE_BREAK_SPACE: ${rem("25px")};

    @media screen and (max-width: 550px) {
      --LINE_BREAK_SPACE: ${rem("15px")};
      --HORIZONTAL_MARGIN: 3rem;
    }
  }
`;
