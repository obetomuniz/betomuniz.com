const getDEVTOArticleBySlug = async (slug) => {
  try {
    return await fetch(`https://dev.to/api/articles/obetomuniz/${slug}`, {
      headers: {
        'api-key': process.env.DEVTO_API_KEY,
        'User-Agent': `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36`,
      },
    }).then((res) => res.json());
  } catch (err) {
    console.error(err); // very basic error handling, customize as needed
    throw new Error(`error fetching page ${slug}, ${err}`);
  }
};

export default getDEVTOArticleBySlug;
