import glob from "glob";
import { BlogJsonLd } from "next-seo";
import matter from "gray-matter";
import { site_name } from "../../metadata/site.json";

import {
  SocialsContainer,
  Container,
  StickyContainer,
  NewsletterContainer,
} from "../../styles/pages/drops";
import { createTitle } from "../../helpers";
import {
  Head,
  Socials,
  Layout,
  SimpleFeed,
  Newsletter,
} from "../../components";

const Drops = (props) => {
  const {
    page: { title, description, keywords, canonical },
    drops,
  } = props;

  const socials = () => (
    <SocialsContainer>
      <Socials />
    </SocialsContainer>
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

      <BlogJsonLd
        url={canonical}
        title={pageTitle}
        images={["https://betomuniz.com/site-thumb.jpg"]}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
        authorName={site_name}
        description={description}
      />

      <Layout showPhoto socials={socials}>
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

export const config = {
  unstable_runtimeJS: false,
};

export default Drops;
