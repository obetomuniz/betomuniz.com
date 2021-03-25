import { useRef } from 'react';
// import glob from 'glob';
import { ArticleJsonLd } from 'next-seo';
import matter from 'gray-matter';
import { formatISO, parse } from 'date-fns';

import { getDEVTOArticles, getDEVTOArticleBySlug } from '../../helpers';
import { site_name } from '../../metadata/site.json';

import {
  StickyContainer,
  NewsletterContainer,
  SocialsContainer,
  Container,
} from '../../styles/pages/drop';
import { createTitle } from '../../helpers';
import {
  Head,
  MiniHeader,
  Layout,
  Drop,
  Socials,
  Newsletter,
  DropCTA,
} from '../../components';

const DropPage = (props) => {
  const {
    page: {
      title,
      description,
      tags: keywords,
      social_image: featured,
      published_at: date,
      canonical_url,
    },
    slug,
  } = props;
  const miniHeaderRef = useRef(null);
  const url = `https://betomuniz.com/drops/${slug}`;
  const titleSuffix = ' | Drops | Beto Muniz';
  const socials = () => (
    <SocialsContainer>
      <Socials />
    </SocialsContainer>
  );

  const pageTitle = createTitle(title, {
    suffix: titleSuffix,
  });
  const dateNormalized = parse(date, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());
  return (
    <>
      <Head
        title={pageTitle}
        description={description}
        url={url}
        canonical={canonical_url}
        keywords={keywords}
        thumbnail={featured}
      />
      <ArticleJsonLd
        url={url}
        title={pageTitle.replace(titleSuffix, '')}
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
          url,
          title: pageTitle,
          text: `"${pageTitle}" by @obetomuniz ${url}`,
        }}
      />
      <Layout ref={miniHeaderRef} showPhoto socials={socials}>
        <Container>
          <Drop page={props.page} />
        </Container>
        {/* <DropCTA /> */}
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
  const DEVTOArticles = await getDEVTOArticles();
  const paths = DEVTOArticles.map(({ slug }) => {
    return { params: { slug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const DEVTOArticle = await getDEVTOArticleBySlug(slug);

  return {
    props: { page: DEVTOArticle, slug },
  };
}

export default DropPage;
