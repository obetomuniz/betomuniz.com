import { useRef } from "react";
import glob from "glob";
import { ArticleJsonLd } from "next-seo";
import matter from "gray-matter";
import { formatISO, parse } from "date-fns";

import { site_name } from "../../metadata/site.json";

import {
  StickyContainer,
  NewsletterContainer,
  SocialsContainer,
  Container,
} from "../../styles/pages/drop";
import { createTitle } from "../../helpers";
import {
  Head,
  MiniHeader,
  Layout,
  Drop,
  Socials,
  Newsletter,
  DropCTACard,
} from "../../components";

const DropPage = (props) => {
  const {
    page: {
      content,
      data: { title, subtitle, description, keywords, date, featured },
    },
    slug,
  } = props;
  const miniHeaderRef = useRef(null);
  const canonical = `https://betomuniz.com/drops/${slug}`;
  const titleSuffix = " | Drops | Beto Muniz";
  const socials = () => (
    <SocialsContainer>
      <Socials />
    </SocialsContainer>
  );

  const pageTitle = createTitle(title, {
    subtitle,
    suffix: titleSuffix,
  });
  const dateNormalized = parse(date, "yyyy-MM-dd h:mm a xxxx", new Date());
  return (
    <>
      <Head
        title={pageTitle}
        description={description}
        url={canonical}
        keywords={keywords}
        thumbnail={featured}
      />
      <ArticleJsonLd
        url={canonical}
        title={pageTitle.replace(titleSuffix, "")}
        images={[featured]}
        datePublished={formatISO(dateNormalized)}
        dateModified={formatISO(dateNormalized)}
        authorName={[site_name]}
        publisherName={site_name}
        publisherLogo="https://betomuniz.com/site-thumb.jpg"
        description={description}
      />
      <MiniHeader
        scrollRef={miniHeaderRef}
        shareData={{
          url: canonical,
          title: pageTitle,
          text: `Olha esse conteúdo do @obetomuniz 👇 ${canonical}`,
        }}
      />
      <Layout ref={miniHeaderRef} showPhoto socials={socials}>
        <Container>
          <Drop content={content} metadata={props.page.data} />
        </Container>
        <DropCTACard />
      </Layout>
      <StickyContainer>
        <NewsletterContainer>
          <Newsletter />
        </NewsletterContainer>
      </StickyContainer>
    </>
  );
};

export async function getStaticPaths() {
  const CONTENT_PATH = `src/content/drops`;
  const files = glob.sync(`${CONTENT_PATH}/**/*.md`);
  const slugs = files.map((file) =>
    file.replace(`${CONTENT_PATH}/`, "").replace(`.md`, "")
  );
  const paths = slugs.map((slug) => {
    return { params: { slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const content = await import(`../../content/drops/${slug}.md`);
  const page = matter(content.default);
  delete page.orig;
  return {
    props: { page, slug },
  };
}

export default DropPage;
