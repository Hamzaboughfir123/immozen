export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.immozen.ma";

export const SITE_NAME = "ImmoZen";

export const CONTACT = {
  phone: "+41 76 603 77 33",
  phoneHref: "tel:+41766037733",
  whatsappHref: "https://wa.me/41766037733",
  email: "contact@immozengroupe.com",
  city: "Casablanca, Maroc",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/immozen" },
  { label: "LinkedIn", href: "https://linkedin.com/company/immozen" },
  { label: "Facebook", href: "https://facebook.com/immozen" },
] as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Pourquoi ImmoZen", href: "#pourquoi-immozen" },
  { label: "Votre économie", href: "#simulateur" },
  { label: "Nos services", href: "#services" },
  { label: "Confier mon bien", href: "#confier-mon-bien" },
] as const;

export const DEFAULT_COMMISSION_RATE = 2.5;
