import { useRef } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';

import {
  Container,
  StickyContainer,
  NewsletterContainer,
} from '../../styles/pages/links';
import { createTitle } from '../../helpers';
import { Head, Layout, About, Newsletter, MyLink } from '../../components';

const LINK_LIST = [
  {
    theme: {
      color: `WHITE`,
      bg: `TWITTER`,
    },
    text: 'Twitter',
    href: 'https://twitter.com/obetomuniz',
  },
  {
    theme: {
      color: `WHITE`,
      bg: `BLACK`,
    },
    text: 'DEV.to',
    href: 'https://dev.to/obetomuniz',
  },
  {
    theme: {
      color: `WHITE`,
      bg: `TELEGRAM`,
    },
    text: 'Telegram',
    href: 'https://t.me/obetomuniz',
    pin: true,
  },
  {
    theme: {
      color: `WHITE`,
      bg: `GITHUB`,
    },
    text: 'GitHub',
    href: 'https://github.com/obetomuniz',
  },
  {
    theme: {
      color: `WHITE`,
      bg: `INSTAGRAM`,
    },
    text: 'Instagram',
    href: 'https://www.instagram.com/obetomuniz/',
    pin: true,
  },
  {
    theme: {
      color: `WHITE`,
      bg: `LINKEDIN`,
    },
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/obetomuniz',
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
