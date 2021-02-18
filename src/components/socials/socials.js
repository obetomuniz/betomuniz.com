import TelegramIcon from "../../assets/vectors/icon-telegram.svg";
import YouTubeIcon from "../../assets/vectors/icon-youtube.svg";
import DropsIcon from "../../assets/vectors/icon-drops.svg";
import TwitterIcon from "../../assets/vectors/icon-twitter.svg";

import { Container, SocialsItem, SocialsItemLink } from "./ui";

const Socials = () => (
  <Container>
    <SocialsItem color="--YOUTUBE_COLOR">
      <SocialsItemLink
        title="Beto Muniz's YouTube Channel"
        href="https://www.youtube.com/c/betomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--BLACK_COLOR">
      <SocialsItemLink title="Beto Muniz's Content Drops" href="/drops">
        <DropsIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--TWITTER_COLOR">
      <SocialsItemLink
        title="Beto Muniz's Twitter Profile"
        href="https://twitter.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--TELEGRAM_COLOR">
      <SocialsItemLink
        title="Beto Muniz's Telegram Channel"
        href="https://t.me/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </SocialsItemLink>
    </SocialsItem>
  </Container>
);

export default Socials;
