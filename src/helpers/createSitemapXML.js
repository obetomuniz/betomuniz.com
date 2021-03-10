import { format } from 'date-fns';

const formatSitemapXMLDate = () => {
  return format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
};

const createSitemapXML = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>https://betomuniz.com/</loc>
        <changefreq>weekly</changefreq>
        <priority>1</priority>
    </url>
    <url>
        <loc>https://betomuniz.com/links/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>
</urlset>`;

export default createSitemapXML;
