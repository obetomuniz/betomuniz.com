import { NextSeo } from "next-seo";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

import {
  SocialsContainer,
  About,
  NewsletterContainer,
} from "../styles/pages/home";
import { Socials, Layout, Newsletter } from "../components";

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
