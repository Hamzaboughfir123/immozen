import type { Metadata } from "next";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/constants";

export const DEFAULT_TITLE =
  "ImmoZen Groupe | Vendez ou louez votre bien sans commission propriétaire au Maroc";

export const DEFAULT_DESCRIPTION =
  "ImmoZen Groupe modernise l'immobilier au Maroc grâce à l'IA, au digital et à un accompagnement personnalisé. Confiez-nous votre appartement, villa, terrain, commerce ou riad.";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1565020244281-fe53df7df170?w=1200&h=630&fit=crop&q=80";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
      "vendre sans commission Maroc",
      "agence immobilière Maroc",
      "louer appartement sans commission",
      "ImmoZen Groupe",
      "vendre villa Maroc",
      "agence immobilière nouvelle génération",
    ],
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "ImmoZen Groupe — agence immobilière nouvelle génération au Maroc",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...overrides,
  };
}

/**
 * JSON-LD Schema.org — RealEstateAgent, imbriqué dans LocalBusiness.
 * Rendu dans le <head> via <script type="application/ld+json">.
 */
export function realEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "ImmoZen Groupe",
    alternateName: "ImmoZen",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    areaServed: {
      "@type": "Country",
      name: "Maroc",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
      addressLocality: "Casablanca",
    },
    knowsLanguage: ["fr", "ar"],
  };
}
