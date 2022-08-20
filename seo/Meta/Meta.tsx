import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
  image?: string;
}
export const Meta = ({
  title,
  description,
  image,
  twitterSite,
  twitterCreator,
}: MetaProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content="" />
    <meta property="og:site_name" content="serjdev.com" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={twitterSite} />
    <meta name="twitter:creator" content={twitterCreator} />
    <meta name="twitter:image" content={image ?? "/apple-touch-icon.png"} />
    <meta property="og:image" content="/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
);
