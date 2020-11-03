import { formatRFC7231, parse } from "date-fns";

const createRssItem = ({ slug, title, description, date }) => {
  const dateNormalized = parse(date, "yyyy-MM-dd h:mm a xxxx", new Date());

  return `
    <item>
      <guid>https://betomuniz.com/drops/${slug}</guid>
      <title><![CDATA[${title}]]></title>
      <link>https://betomuniz.com/drops/${slug}</link>
      <description><![CDATA[${description}]]></description>
      <pubDate>${formatRFC7231(dateNormalized)}</pubDate>
    </item>`;
};

const createRSS = (items) => {
  const dateNormalized = parse(
    items[0].date,
    "yyyy-MM-dd h:mm a xxxx",
    new Date()
  );

  return `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Beto Muniz Drops</title>
    <link>https://betomuniz.com/drops</link>
    <description>Beto Muniz is a Front-End Engineer and Content Creator who lives in Belo Horizonte, Brazil.</description>
    <language>pt-BR</language>
    <lastBuildDate>${formatRFC7231(dateNormalized)}</lastBuildDate>
    <atom:link href="https://betomuniz.com/rss.xml" rel="self" type="application/rss+xml"/>${items
      .map(createRssItem)
      .join("")}
  </channel>
</rss>`;
};

export default createRSS;
