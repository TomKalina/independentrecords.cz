import {
  SITE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_E164,
  SITE_SOCIAL,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
import type { Metadata } from "next";

export const DEFAULT_OG_IMAGE = "/assets/images/studio/medium/11.jpg";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

type PageMetadataOptions = {
  title?: string | null;
  description?: string;
  path: string;
  noIndex?: boolean;
  ogImage?: string;
};

export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);
  const ogTitle =
    title && title.length > 0 ? `${title} | ${SITE_NAME}` : SITE_TITLE;

  return {
    ...(title !== null && title !== undefined && title.length > 0
      ? { title }
      : { title: SITE_TITLE }),
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "cs_CZ",
      url,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      images: [{ url: imageUrl, alt: SITE_TITLE }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function buildRootLayoutMetadata(): Metadata {
  const { title: _ignored, ...pageMeta } = buildPageMetadata({
    path: "/",
    title: null,
  });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    icons: {
      icon: "/favicon_io/favicon.ico",
      apple: "/favicon_io/apple-touch-icon.png",
    },
    ...pageMeta,
  };
}

export function buildHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "cs-CZ",
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        email: SITE_EMAIL,
        telephone: SITE_PHONE_E164,
        image: absoluteUrl(DEFAULT_OG_IMAGE),
        address: {
          "@type": "PostalAddress",
          ...SITE_ADDRESS,
        },
        areaServed: {
          "@type": "City",
          name: "Česká Třebová",
        },
        sameAs: SITE_SOCIAL,
      },
    ],
  };
}
