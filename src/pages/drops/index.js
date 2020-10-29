import glob from "glob";
import { NextSeo } from "next-seo";
import matter from "gray-matter";

import {
  SocialsContainer,
  Container,
  StickyContainer,
  NewsletterContainer,
} from "../../styles/pages/drops";
import { Socials, Layout, SimpleFeed, Newsletter } from "../../components";

const Drops = (props) => {
  const {
    page: { title, description, keywords, canonical },
    drops,
  } = props;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords.join(", ")}
      />
      <SocialsContainer>
        <Socials />
      </SocialsContainer>

      <Layout hideHeader>
        <Container>
          <SimpleFeed feed={drops} />
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
  const CONTENT_PATH = `src/content/drops`;
  const pageContent = await import(`../../content/pages/drops.md`);
  const page = matter(pageContent.default).data;
  const dropFiles = glob.sync(`${CONTENT_PATH}/**/*.md`);
  const drops = await Promise.all(
    dropFiles.map(async (dropFile) => {
      const dropSlug = dropFile
        .replace(`${CONTENT_PATH}/`, "")
        .replace(`.md`, "");
      const drop = await import(`../../content/drops/${dropSlug}.md`);
      return {
        slug: dropSlug,
        data: matter(drop.default).data,
      };
    })
  );

  return {
    props: { page, drops },
  };
}

export default Drops;
