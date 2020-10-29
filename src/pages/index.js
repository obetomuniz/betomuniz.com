import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

import {
  SocialsContainer,
  About,
  NewsletterContainer,
} from "../styles/pages/home";
import { createTitle } from "../helpers";
import { Head, Socials, Layout, Newsletter } from "../components";

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
  const pageTitle = createTitle(title);

  return (
    <>
      <Head
        title={pageTitle}
        description={description}
        url={canonical}
        keywords={keywords}
      />

      <Layout showPhoto socials={socials} bottomNewsletter={bottomNewsletter}>
        <About>
          <ReactMarkdown allowDangerousHtml children={content} />
        </About>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const pageContent = await import(`../content/pages/home.md`);
  const page = matter(pageContent.default).data;
  return {
    props: { page },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

export default Home;
