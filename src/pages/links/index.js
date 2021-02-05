import { useRef } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

import {
  Container,
  About,
  StickyContainer,
  NewsletterContainer,
  VideoContainer,
} from "../../styles/pages/links";
import { createTitle } from "../../helpers";
import { Head, Layout, Newsletter, MyLink } from "../../components";

const LINK_LIST = [
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `YOUTUBE_COLOR`,
    },
    text: "YouTube",
    href: "https://www.youtube.com/c/betomuniz",
    pin: true,
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `INSTAGRAM_COLOR`,
    },
    text: "Instagram",
    href: "https://www.instagram.com/obetomuniz/",
    pin: true,
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `TWITTER_COLOR`,
    },
    text: "Twitter",
    href: "https://twitter.com/obetomuniz",
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `TELEGRAM_COLOR`,
    },
    text: "Telegram",
    href: "https://t.me/obetomuniz",
    pin: true,
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `TWITCH_COLOR`,
    },
    text: "Twitch",
    href: "https://www.twitch.tv/obetomuniz",
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `DISCORD_COLOR`,
    },
    text: "Discord",
    href: "https://beto.im/discord",
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `LINKEDIN_COLOR`,
    },
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/obetomuniz",
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `BLACK_COLOR`,
    },
    text: "DEV.to",
    href: "https://dev.to/obetomuniz",
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `GITHUB_COLOR`,
    },
    text: "GitHub",
    href: "https://github.com/obetomuniz",
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `FACEBOOK_COLOR`,
    },
    text: "Facebook",
    href: "https://facebook.com/obetomuniz",
  },
];

const Links = (props) => {
  const {
    page: { title, description, keywords, canonical, content, video },
  } = props;
  const miniHeaderRef = useRef(null);

  const pageTitle = createTitle(title);

  return (
    <>
      <Head
        title={pageTitle}
        description={description}
        url={canonical}
        keywords={keywords}
      />

      <Layout ref={miniHeaderRef} showPhoto>
        <About>
          <ReactMarkdown allowDangerousHtml children={content} />
        </About>
        <Container>
          {LINK_LIST.map((link, index) => (
            <MyLink key={`link-${index}`} {...link} />
          ))}
        </Container>
        {video && (
          <VideoContainer>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video}`}
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </VideoContainer>
        )}
      </Layout>

      <StickyContainer>
        <NewsletterContainer>
          <Newsletter />
        </NewsletterContainer>
      </StickyContainer>
    </>
  );
};

export async function getStaticProps() {
  const pageContent = await import(`../../content/pages/links.md`);
  const page = matter(pageContent.default).data;

  return {
    props: { page },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

export default Links;
