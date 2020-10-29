import TelegramIcon from "../../assets/vectors/icon-telegram.svg";
import YouTubeIcon from "../../assets/vectors/icon-youtube.svg";
import InstagramIcon from "../../assets/vectors/icon-instagram.svg";
import TwitchIcon from "../../assets/vectors/icon-twitch.svg";

import { Container, SocialsItem, SocialsItemLink } from "./ui";

const Socials = () => (
  <Container>
    <SocialsItem color="--YOUTUBE_COLOR">
      <SocialsItemLink
        title="Beto Muniz YouTube"
        href="https://www.youtube.com/c/betomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--INSTAGRAM_COLOR">
      <SocialsItemLink
        title="Beto Muniz Instagram"
        href="https://instagram.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--TWITCH_COLOR">
      <SocialsItemLink
        title="Beto Muniz Twitch"
        href="https://www.twitch.tv/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitchIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--TELEGRAM_COLOR">
      <SocialsItemLink
        title="Beto Muniz Telegram"
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
