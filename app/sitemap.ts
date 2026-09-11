import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Pas de `lastModified` : on ne connaît pas de vraie date de dernière
// modification par page, et en fabriquer une avec la date du build (ex:
// `new Date()`) enverrait un faux signal de fraîcheur à Google. Le champ
// est optionnel dans le schéma sitemap — on le rajoutera si un jour ces
// dates sont réellement suivies (ex: CMS avec updatedAt).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    { url: `${SITE_URL}/cookies`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
