import glob from "glob";
import { NextSeo } from "next-seo";
import matter from "gray-matter";

import { Container } from "../../styles/pages/drop";
import { Drop } from "../../components";

const DropPage = (props) => {
  const {
    page: {
      content,
      data: { title, subtitle, description, keywords },
    },
    slug,
  } = props;

  let customTitle = title;

  if (subtitle) {
    customTitle = `${customTitle}: ${subtitle}`;
  }

  return (
    <>
      <NextSeo
        title={customTitle}
        description={description}
        canonical={`https://betomuniz.com/drops/${slug}`}
        keywords={keywords.join(", ")}
      />

      <Container>
        <Drop content={content} />
      </Container>
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
