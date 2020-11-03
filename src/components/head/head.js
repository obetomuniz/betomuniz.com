import NextHead from "next/head";
import { NextSeo } from "next-seo";
import {
  site_name,
  site_username,
  google_analytics_id,
} from ".././../metadata/site.json";

const Head = ({
  title,
  description,
  url,
  keywords,
  og,
  thumbnail,
  children,
}) => {
  return (
    <>
      <NextHead>
        <link
          rel="shortcut icon"
          href="/icons/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          href={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`}
          rel="preload"
          as="script"
        />
        <link href="https://www.google-analytics.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${google_analytics_id}');
        `,
          }}
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Beto Muniz's RSS"
          href="https://betomuniz.com/rss.xml"
        />
        {children}
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        keywords={keywords.join(", ")}
        openGraph={{
          url,
          type: "website",
          title: title,
          locale: "pt_BR",
          description,
          images: [
            { url: thumbnail || "https://betomuniz.com/site-thumb.jpg" },
          ],
          site_name,
          profile: {
            firstName: site_name.split(" ")[0],
            lastName: site_name.split(" ")[1],
            username: site_username,
            gender: "male",
          },
          ...og,
        }}
        twitter={{
          handle: `@${site_username}`,
          site: `@${site_username}`,
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "theme-color",
            content: "#663399",
          },
          {
            name: "application-name",
            content: "NextSeo",
          },
        ]}
      />
    </>
  );
};

export default Head;
