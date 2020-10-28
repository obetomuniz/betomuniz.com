import Head from "next/head";

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

// Drop.getInitialProps = async function (ctx) {
//   const { slug } = ctx.query;
//   const content = await import(`../../posts/${slug}.md`);
//   const config = await import(`../../data/config.json`);
//   const data = matter(content.default);
//   return {
//     siteTitle: config.title,
//     ...data,
//   };
// };

export default Drop;
