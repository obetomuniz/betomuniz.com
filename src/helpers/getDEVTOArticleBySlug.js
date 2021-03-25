const getDEVTOArticleBySlug = async (slug) => {
  try {
    return await fetch(`https://dev.to/api/articles/obetomuniz/${slug}`, {
      headers: {
        'api-key': process.env.DEVTO_API_KEY,
      },
    }).then((res) => res.json());
  } catch (err) {
    console.error(err); // very basic error handling, customize as needed
    throw new Error(`error fetching page ${slug}, ${err}`);
  }
};

export default getDEVTOArticleBySlug;
