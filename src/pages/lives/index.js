import { useRef } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

import {
  Container,
  About,
  StickyContainer,
  NewsletterContainer,
  VideoContainer,
} from "../../styles/pages/lives";
import { createTitle } from "../../helpers";
import { Head, Layout, Newsletter, MyLink } from "../../components";

const LINK_LIST = [
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `TWITCH_COLOR`,
    },
    text: "Twitch",
    href: "https://www.twitch.tv/obetomuniz",
    pin: true,
  },
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
      color: `BLACK_COLOR`,
      bg: `WHITE_COLOR`,
      textAlt: true,
    },
    text: "Adicionar no Google Calendar",
    href: `https://betomuniz.com/add-to-calendar`,
    altPin: true,
  },
  {
    theme: {
      color: `WHITE_COLOR`,
      bg: `TELEGRAM_COLOR`,
    },
    text: "Telegram",
    href: "https://t.me/obetomuniz",
  },
  // {
  //   theme: {
  //     color: `WHITE_COLOR`,
  //     bg: `INSTAGRAM_COLOR`,
  //   },
  //   text: "Instagram",
  //   href: "https://www.instagram.com/obetomuniz/",
  //   pin: true,
  // },
];

const Lives = (props) => {
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
              title="Video from my YouTube Channel"
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
  const pageContent = await import(`../../content/pages/lives.md`);
  const page = matter(pageContent.default).data;

  return {
    props: { page },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

export default Lives;
