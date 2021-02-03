import TelegramIcon from "../../assets/vectors/icon-telegram.svg";
import YouTubeIcon from "../../assets/vectors/icon-youtube.svg";
import InstagramIcon from "../../assets/vectors/icon-instagram.svg";
import TwitterIcon from "../../assets/vectors/icon-twitter.svg";

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
    <SocialsItem color="--TWITTER_COLOR">
      <SocialsItemLink
        title="Beto Muniz Twitter"
        href="https://twitter.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
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
