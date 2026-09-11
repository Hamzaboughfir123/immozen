import type { Metadata } from "next";
import { CONTACT, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

export const DEFAULT_TITLE =
  "ImmoZen Groupe Marrakech | Vendre ou louer son bien sans commission propriétaire";

export const DEFAULT_DESCRIPTION =
  "Agence immobilière à Marrakech : ImmoZen Groupe accompagne les propriétaires pour vendre ou louer appartement, villa, riad, terrain ou commerce, avec 0 DH de commission propriétaire.*";

// Image OG locale (photo de Marrakech déjà utilisée en hero, recadrée 1200×630),
// pour remplacer l'ancien lien externe Unsplash — évite une dépendance à un
// service tiers et garde une prévisualisation de partage cohérente avec la marque.
const OG_IMAGE = "/images/og-immozen.webp";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
      "agence immobilière Marrakech",
      "vendre appartement Marrakech",
      "vendre villa Marrakech",
      "vendre maison Marrakech",
      "louer appartement Marrakech",
      "agence immobilière sans commission propriétaire Marrakech",
      "0 DH commission propriétaire",
      "confier son bien immobilier à Marrakech",
      "ImmoZen Groupe",
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
          alt: "ImmoZen Groupe — agence immobilière à Marrakech, 0 DH de commission propriétaire",
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
 *
 * `areaServed` reflète littéralement ce qui est annoncé sur la page (bandeau
 * "Marrakech" du hero + mention "Maroc" dans l'accroche) : ne pas resserrer
 * ou élargir davantage sans que le contenu visible change en même temps.
 *
 * `address.addressLocality` reste "Casablanca" (siège déclaré actuel) — à
 * confirmer/corriger si l'adresse légale réelle est différente, voir le
 * rapport final.
 */
export function realEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: "ImmoZen Groupe",
    alternateName: "ImmoZen",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    logo: `${SITE_URL}/images/logo.webp`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    areaServed: [
      { "@type": "City", name: "Marrakech" },
      { "@type": "Country", name: "Maroc" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
      addressLocality: "Casablanca",
    },
    knowsLanguage: ["fr", "ar"],
    sameAs: SOCIAL_LINKS.map((social) => social.href),
  };
}

/**
 * JSON-LD Schema.org — WebSite. Pas de `potentialAction` SearchAction :
 * le site n'a pas de moteur de recherche interne, en ajouter un serait un
 * balisage non conforme au contenu réel.
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr-MA",
  };
}

/**
 * JSON-LD Schema.org — FAQPage. À construire à partir du même tableau de
 * questions/réponses que la section FAQ visible sur la page (voir
 * components/sections/FaqSection.tsx) pour garantir que le balisage
 * correspond toujours exactement au contenu affiché.
 */
export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * JSON-LD Schema.org — avis clients (Review/AggregateRating).
 *
 * Non utilisé pour l'instant : aucun avis vérifiable n'est disponible dans
 * le projet, et Google sanctionne les données structurées d'avis fictifs
 * ou non vérifiés. À appeler depuis realEstateAgentJsonLd() (champ `review`
 * / `aggregateRating`) le jour où de vrais avis clients (Google, Trustpilot…)
 * sont disponibles — ne jamais remplir avec des valeurs inventées.
 */
export function reviewJsonLd(
  reviews: { author: string; rating: number; text: string; datePublished: string }[],
) {
  return reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    datePublished: review.datePublished,
  }));
}
