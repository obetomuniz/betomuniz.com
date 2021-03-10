import { createGlobalStyle } from 'styled-components';
import { rgba, rem } from 'polished';

export default createGlobalStyle`
  :root {
    /* Color Scheme */
    --WHITE: white;
    --BLACK: black;
    --EERIE_BLACK: #242423;
    --REBECCA_PURPLE: rebeccapurple;
    --ELETRIC_VIOLET: #9900FF;
    --MAXIMUM_YELLOW: #FFFF3F;
    --MAIZE_CRAYOLA: #F5CB5C;
    --PERSIAN_ROSE: #FF00A6;
    --SEA_GREEN_CRAYOLA: #00FFCC;
    --CAPRI: #00C3FF;
    --ULTRAMARINE: #002FFF;
    --RED_RYB: #FF1D15;
    
    /* SOCIALS */
    --TWITTER: #1da1f2;
    --LINKEDIN: #0077b5;
    --DISCORD: #7289da;
    --TELEGRAM: #32afed;
    --TWITCH: #a970ff;
    --GITHUB: #24292e;
    --INSTAGRAM: #c13584;
    --FACEBOOK: #3b5998;
    --YOUTUBE: #ff0000;

        /* Layout */
    --HORIZONTAL_MARGIN: 5rem;

    /* Typo */
    --FONT_FAMILY_SERIF: fell, Palatino, Georgia, Cambria, "Times New Roman", Times, serif;
    --FONT_FAMILY_SANS: medium-content-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
    --FONT_FAMILY_INLINE_CODE: "Courier New", serif;
    --LINE_BREAK_SPACE: ${rem('25px')};

    @media screen and (max-width: 600px) {
      --LINE_BREAK_SPACE: ${rem('15px')};
      --HORIZONTAL_MARGIN: 3rem;
    }
  }
`;
