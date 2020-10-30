import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import TelegramIcon from "../../assets/vectors/icon-telegram.svg";
import YouTubeIcon from "../../assets/vectors/icon-youtube.svg";
import InstagramIcon from "../../assets/vectors/icon-instagram.svg";
import TwitchIcon from "../../assets/vectors/icon-twitch.svg";

import {
  Container,
  InnerContainer,
  Photo,
  PhotoImage,
  ShareButton,
  Socials,
  SocialsItem,
  SocialsItemLink,
} from "./ui";

const MiniHeader = ({ scrollRef, shareData }) => {
  const [sticky, setSticky] = useState(false);
  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        throw Error("Done!");
      } catch {}
    } else {
      alert(
        "Ish! Este browser ainda não suporta a Web Share API.\n\nPoderia compartilhar manualmente? 🤗"
      );
    }
  }, [shareData]);

  const handleScroll = () => {
    if (scrollRef.current) {
      setSticky(scrollRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Container
      aria-hidden="true"
      style={{
        transform: sticky ? "translate3d(0, 0, 0)" : "translate3d(0, -100%, 0)",
      }}
    >
      <InnerContainer>
        <Link href="/">
          <Photo>
            <PhotoImage
              loading="lazy"
              alt="Beto Muniz"
              src="https://www.gravatar.com/avatar/fff7258836f20ea66b061b49a51fe8dd?s=170"
              width="80"
              height="80"
            />
          </Photo>
        </Link>

        <ShareButton onClick={handleShare}>Compartilhar</ShareButton>

        <Socials>
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
        </Socials>
      </InnerContainer>
    </Container>
  );
};

export default MiniHeader;
