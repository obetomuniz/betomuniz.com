import glob from "glob";
import Head from "next/head";
import matter from "gray-matter";

const CONTENT_PATH = `src/content/drops`;

const Drop = () => {
  return (
    <div>
      <Head>
        <title>Drop | Beto Muniz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Drop Page!</h1>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
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
  const data = matter(content.default);
  return {
    props: { page: { ...data } },
  };
}

export default Drop;
