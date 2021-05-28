import { FunctionComponent } from 'react';
import Head from 'next/Head';

type MetaProps = {
  canonicalUrl?: string;
  siteDescription?: string;
  title?: string;
  keywords?: string;
  icon?: string;
  description?: string;
  ogTitle?: string;
  ogType?: string;
  ogLocale?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogImage?: string;
};

export const siteUrl = 'https://.joshb.io';

const Meta: FunctionComponent<MetaProps> = ({
  canonicalUrl = siteUrl,
  title = "Josh's Portfolio",
  keywords = 'webdevelopement, webdev, ts, js, solidity, mobile, blockchain, React, portfolio, coding, josh',
  icon = '/favicon.ico',
  description = "Josh Burgess's Web Portfolio. Experience something more than just another website, and if you like what you see, let's work together and make something creative for you!",
  ogTitle = "Josh's Portfolio",
  ogType = 'website',
  ogLocale = 'en_US',
  ogDescription = "Josh Burgess's Web Portfolio. Experience something more than just another website, and if you like what you see, let's work together and make something creative for you!",
  ogUrl = siteUrl,
  ogSiteName = "Josh Burgess's Portfolio",
  ogImage = '/favicon.ico',
  children
}) => {
  ogImage = ogImage != null ? ogImage : '/assets/Icon.svg';
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} key="metakeywords" />

      <link rel="icon" href={icon} key="metaicon" />
      <link rel="canonical" href={canonicalUrl} key="metacanonical" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        key="metarobots"
      />
      <meta name="description" content={description} key="metadescription" />

      <meta property="og:title" content={ogTitle} key="ogtitle" />
      <meta property="og:type" content={ogType} key="ogtype" />
      <meta property="og:locale" content={ogLocale} key="oglocale" />
      <meta
        property="og:description"
        content={ogDescription}
        key="ogdescription"
      />
      <meta property="og:url" content={ogUrl} key="ogurl" />
      <meta property="og:site_name" content={ogSiteName} key="ogsitename" />
      <meta
        property="og:image"
        content={`${siteUrl}${ogImage}`}
        key="ogimage"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twittercard"
      />
      <meta name="twitter:site" content="@tumee" key="twittersite" />
      <meta name="twitter:creator" content="@tumee" key="twittercreator" />

      {children}
    </Head>
  );
};

export default Meta;
