import { format } from 'date-fns';

const SITE_ROOT = 'https://betomuniz.com';

const formatSitemapXMLDate = () => {
  return format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
};

const setSitemapItem = ({ url = '', freq = 'weekly', weight = 1 }) => `
    <url>
        <loc>${url}</loc>
        <changefreq>${freq}</changefreq>
        <priority>${weight}</priority>
    </url>`;

const setDropsSitemap = (drops) => {
  return drops
    .map(({ slug }) =>
      setSitemapItem({
        url: `${SITE_ROOT}/drops/${slug}`,
        freq: 'weekly',
        weight: 0.9,
      })
    )
    .join('');
};

const createSitemapXML = ({ drops }) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${setSitemapItem({
      url: `${SITE_ROOT}/`,
      freq: 'weekly',
      weight: 1,
    })}
    ${setSitemapItem({
      url: `${SITE_ROOT}/links/`,
      freq: 'weekly',
      weight: 0.5,
    })}
    ${setDropsSitemap(drops)}
</urlset>`;

export default createSitemapXML;
