import { NextSeo } from "next-seo";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import styled from "styled-components";
import { rem } from "polished";

import { Socials, Layout, Newsletter } from "../components";

const SocialsContainer = styled.div`
  width: 550px;
  margin: var(--HORIZONTAL_MARGIN) auto 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    margin: var(--HORIZONTAL_MARGIN_MOBILE) auto 0;
    width: 100%;
  }
`;

const About = styled.main`
  text-align: center;
  width: 550px;
  margin: 0 auto;
  p {
    font-size: ${rem("18px")};
    line-height: ${rem("44px")};

    &:first-child {
      &:first-letter {
        font-size: ${rem("32px")};
      }
    }
  }

  a {
    font-weight: bold;
  }

  @media screen and (max-width: 550px) {
    width: 100%;

    p {
      font-size: ${rem("16px")};
      line-height: ${rem("30px")};
    }
  }
`;

const NewsletterContainer = styled.div`
  width: 550px;
  margin: 0 auto var(--HORIZONTAL_MARGIN);

  @media screen and (max-width: 550px) {
    margin: 0 auto var(--HORIZONTAL_MARGIN_MOBILE);
    width: 100%;
  }
`;

const Home = (props) => {
  const {
    page: { title, description, keywords, canonical, content },
  } = props;
  const socials = () => (
    <SocialsContainer>
      <Socials />
    </SocialsContainer>
  );
  const bottomNewsletter = () => (
    <NewsletterContainer>
      <Newsletter />
    </NewsletterContainer>
  );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords.join(", ")}
      />

      <Layout socials={socials} bottomNewsletter={bottomNewsletter}>
        <About>
          <ReactMarkdown allowDangerousHtml children={content} />
        </About>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const content = await import(`../content/pages/home.md`);
  const data = matter(content.default);
  return {
    props: { page: { ...data.data } },
  };
}

// export const config = {
//   unstable_runtimeJS: false,
// };

export default Home;
