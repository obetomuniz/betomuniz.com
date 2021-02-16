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
    href: `https://www.google.com/calendar/render?action=TEMPLATE&text=Beto+On-The-Line+%231%3A+Talk+sobre+Next.js%2C+Futuro+dos+Meus+Conte%C3%BAdos+e+Perguntas+Frequentes&details=Fala+galera%21%0A%0AEsse+%C3%A9+o+Beto+On-The-Line+%E2%88%92+Evento+em+formato+Live+na+Twitch+e+no+YouTube+do+Beto+Muniz+para+falar+sobre+Desenvolvimento+Web.%0A%0APara+participar+atrav%C3%A9s+do+YouTube%2C+acesse%3A%0A%0A%E2%9A%A1%EF%B8%8F+https%3A%2F%2Fwww.youtube.com%2Fc%2Fbetomuniz%0A%0APara+participar+atrav%C3%A9s+da+Twitch%2C+acesse%3A%0A%0A%F0%9F%A6%84+https%3A%2F%2Fwww.twitch.tv%2Fobetomuniz%0A%0AD%C3%AA+seu+RVSP+%F0%9F%91%8D+no+Twitch+e%2Fou+YouTube%2C+e+participe.%0A%0ANos+vemos+por+l%C3%A1.%0A%0A%5B+%5D%27s%0A%0ABeto+Muniz.&location=YouTube+e+Twitch+%28Links+Na+Descri%C3%A7%C3%A3o%29&dates=20210216T223000Z%2F20210217T003000Z`,
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
