import { format, parse } from "date-fns";

const formatSitemapXMLDate = (date) => {
  return format(
    parse(date, "yyyy-MM-dd h:mm a xxxx", new Date()),
    "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
  );
};

const staticSitemapItems = () => `
    <url>
        <loc>https://betomuniz.com/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
        <lastmod>2020-10-30T18:59:34.276Z</lastmod>
    </url>
    <url>
        <loc>https://betomuniz.com/drops/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
        <lastmod>2020-10-30T18:59:34.276Z</lastmod>
    </url>`;

const createSitemapXMLItem = ({ slug, date }) => `
    <url>
        <loc>https://betomuniz.com/drops/${slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
        <lastmod>${formatSitemapXMLDate(date)}</lastmod>
    </url>`;

const createSitemapXML = (items) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${staticSitemapItems()}
    ${items.map(createSitemapXMLItem).join("")}
</urlset>`;

export default createSitemapXML;
