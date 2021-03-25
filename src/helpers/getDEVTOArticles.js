const getDEVTOArticles = async () => {
  const per_page = 200; // can go up to 1000
  let page = 0;
  let allArticles = [];
  let latestResult = [];

  do {
    page += 1; // bump page up by 1 every loop

    try {
      latestResult = await fetch(
        `https://dev.to/api/articles/me/published?page=${page}&per_page=${per_page}`,
        {
          headers: {
            'api-key': process.env.DEVTO_API_KEY,
          },
        }
      )
        .then((res) => res.json())
        .then((x) => (allArticles = allArticles.concat(x)));
    } catch (err) {
      console.error(err); // very basic error handling, customize as needed
      throw new Error(`error fetching page ${page}, ${err}`);
    }
  } while (latestResult.length === per_page);

  return allArticles;
};

export default getDEVTOArticles;
