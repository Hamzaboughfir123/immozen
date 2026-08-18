# ImmoZen — Site vitrine (frontend)

Site vitrine premium pour **ImmoZen**, agence immobilière nouvelle génération
au Maroc. Frontend uniquement : Next.js (App Router) + TypeScript + Tailwind
CSS. Aucun backend, aucune base de données, aucune authentification.

Le message principal : **propriétaires, vendez ou louez votre bien sans
commission d'agence avec ImmoZen.**

## Stack

- Next.js 16 (App Router, Server Components par défaut)
- TypeScript strict
- Tailwind CSS 4 (thème CSS-first, couleurs de marque ImmoZen)
- `next/image` pour l'optimisation des images
- `next/font` pour les polices (Manrope + Fraunces)
- Aucune dépendance UI lourde (pas de librairie d'animation externe)

## Démarrer le projet

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000.

## Scripts

- `npm run dev` — serveur de développement
- `npm run build` — build de production
- `npm run start` — démarre le build de production
- `npm run lint` — ESLint
- `npm run typecheck` — vérification TypeScript sans émission

## Variables d'environnement

Copier `.env.local.example` vers `.env.local` si besoin (uniquement utilisé
pour l'URL publique du site dans les metadata SEO — `NEXT_PUBLIC_SITE_URL`).
Aucune variable backend n'est nécessaire pour l'instant.

## Architecture

```text
app/
  layout.tsx                  Layout racine, polices, metadata, JSON-LD
  page.tsx                    Assemblage de la landing page
  globals.css                 Thème Tailwind v4 + tokens de marque
  robots.ts / sitemap.ts      SEO technique
  icon.tsx                    Favicon généré
  mentions-legales/page.tsx
  politique-de-confidentialite/page.tsx
  cookies/page.tsx

components/
  layout/                     Navbar, Footer, CTA sticky mobile
  sections/                   Sections de la page (Server Components)
  interactive/                Simulateur d'économie ("use client")
  ui/                         Composants génériques réutilisables
  legal/                      Gabarit des pages légales

lib/
  constants.ts                Nav, contact, réseaux sociaux
  seo.ts                      Metadata + JSON-LD RealEstateAgent
  utils.ts                    Helpers (cn, formatMAD)
```

## Capture des demandes propriétaires — état actuel

Pas de formulaire : la section finale (`OwnerLeadSection.tsx`) propose deux
CTA directs — **WhatsApp** et **Appel** — construits à partir de
`CONTACT.whatsappHref` / `CONTACT.phoneHref` (`lib/constants.ts`). Tous les
CTA de la page (Hero, simulateur, navbar, CTA sticky mobile) pointent vers
`#confier-mon-bien`, qui scroll jusqu'à ces boutons.

Si un formulaire ou une intégration CRM est nécessaire plus tard, il suffit
de remplacer le contenu de `OwnerLeadSection.tsx` par un composant de
formulaire connecté à une API.

## SEO

- Metadata API Next.js (title/description/OG/Twitter) centralisée dans
  `lib/seo.ts`
- `robots.ts` et `sitemap.ts` générés dynamiquement
- Un seul `<h1>` (Hero), hiérarchie `<h2>`/`<h3>` cohérente
- Données structurées `RealEstateAgent` (Schema.org) injectées dans le
  `<head>`

## Notes

- Les photos immobilières proviennent d'Unsplash (villas, riads,
  appartements, architecture marocaine) via `next/image` avec
  `remotePatterns` configuré dans `next.config.ts`.
- Les coordonnées de contact et réseaux sociaux (`lib/constants.ts`) sont des
  placeholders à remplacer par les vraies informations ImmoZen.
- Aucune donnée chiffrée, aucun avis client ni statistique n'est inventé :
  l'exemple du simulateur (5 000 000 DH) est explicitement présenté comme une
  simulation indicative.
