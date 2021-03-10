import TelegramIcon from '../../assets/vectors/icon-telegram.svg';
import DEVtoIcon from '../../assets/vectors/icon-devto.svg';
import GitHubIcon from '../../assets/vectors/icon-github-2.svg';
import TwitterIcon from '../../assets/vectors/icon-twitter.svg';
import InstagramIcon from '../../assets/vectors/icon-instagram.svg';

import { Container, SocialsItem, SocialsItemLink } from './ui';

const Socials = () => (
  <Container>
    <SocialsItem color="--TWITTER">
      <SocialsItemLink
        title="Beto Muniz's Twitter Profile"
        href="https://twitter.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </SocialsItemLink>
    </SocialsItem>

    <SocialsItem color="--BLACK">
      <SocialsItemLink
        title="Beto Muniz's DEV.to Profile"
        href="https://dev.to/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DEVtoIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--TELEGRAM">
      <SocialsItemLink
        title="Beto Muniz's Telegram Channel"
        href="https://t.me/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--GITHUB">
      <SocialsItemLink
        title="Beto Muniz's GitHub Profile"
        href="https://github.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </SocialsItemLink>
    </SocialsItem>
    <SocialsItem color="--INSTAGRAM">
      <SocialsItemLink
        title="Beto Muniz's Telegram Channel"
        href="https://instagram.com/obetomuniz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </SocialsItemLink>
    </SocialsItem>
  </Container>
);

export default Socials;
