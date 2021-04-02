import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import siteConfigs from '../../metadata/site.json';

import TelegramIcon from '../../assets/vectors/icon-telegram.svg';
import TwitterIcon from '../../assets/vectors/icon-twitter.svg';

import {
  Container,
  InnerContainer,
  Photo,
  PhotoImage,
  ShareButton,
  Socials,
  SocialsItem,
  SocialsItemLink,
} from './ui';

const MiniHeader = ({ scrollRef, shareData }) => {
  const [sticky, setSticky] = useState(false);
  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        throw Error('Done!');
      } catch {}
    } else {
      alert(
        "Oops! This browser still don't support the Web Share API.\n\nCould you please share manually? 🤗"
      );
    }
  }, [shareData]);

  const handleScroll = () => {
    if (scrollRef.current) {
      setSticky(scrollRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Container
      aria-hidden="true"
      style={{
        transform: sticky ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
        opacity: sticky ? 1 : 0,
      }}
    >
      <InnerContainer>
        <Link href="/">
          <Photo>
            <PhotoImage
              loading="lazy"
              alt="Beto Muniz"
              src={siteConfigs.gravatar}
              width="80"
              height="80"
            />
          </Photo>
        </Link>

        <ShareButton onClick={handleShare}>Compartilhar</ShareButton>

        <Socials>
          <SocialsItem color="--TWITTER">
            <SocialsItemLink
              title="Beto Muniz Twitter"
              href="https://twitter.com/obetomuniz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </SocialsItemLink>
          </SocialsItem>
          <SocialsItem color="--TELEGRAM">
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
