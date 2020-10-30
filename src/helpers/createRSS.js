const createRssItem = ({ slug, title, description, date }) => `
    <item>
      <guid>https://betomuniz.com/drops/${slug}</guid>
      <title>${title}</title>
      <link>https://betomuniz.com/drops/${slug}</link>
      <description>${description}</description>
      <pubDate>${date}</pubDate>
    </item>`;

const createRSS = (items) => `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Beto Muniz Drops</title>
    <link>https://betomuniz.com/drops</link>
    <description>Beto Muniz is a Front-End Engineer & Content Creator who lives in Belo Horizonte, Brazil.</description>
    <language>pt-BR</language>
    <lastBuildDate>${items[0].date}</lastBuildDate>
    <atom:link href="https://betomuniz.com/rss.xml" rel="self" type="application/rss+xml"/>${items
      .map(createRssItem)
      .join("")}
  </channel>
</rss>`;

export default createRSS;
