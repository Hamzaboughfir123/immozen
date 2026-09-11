import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Section "Témoignages" prête à l'emploi, NON montée sur la page pour
 * l'instant : le projet ne contient aujourd'hui aucun avis client vérifiable,
 * et afficher des témoignages inventés serait à la fois interdit (E-E-A-T,
 * confiance) et risqué juridiquement (faux avis).
 *
 * Pour l'activer une fois de vrais avis disponibles (Google, Trustpilot,
 * retours écrits de propriétaires...) :
 *   1. Remplir `TestimonialItem[]` avec des avis réels (nom, ville, texte,
 *      note) — ne jamais en inventer.
 *   2. Importer et rendre <TestimonialsSection items={...} /> dans
 *      app/page.tsx, par exemple entre <HowItWorksSection /> et
 *      <FaqSection />.
 *   3. Ajouter les avis correspondants aux données structurées via
 *      `reviewJsonLd()` (lib/seo.ts) dans `realEstateAgentJsonLd()`
 *      (champs `review` / `aggregateRating`), toujours à partir de vrais avis.
 */
export type TestimonialItem = {
  author: string;
  /** Ville ou contexte du client, ex: "Propriétaire à Marrakech" */
  context: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export function TestimonialsSection({ items }: { items: TestimonialItem[] }) {
  if (items.length === 0) return null;

  return (
    <section id="avis" className="bg-brand-beige/50 py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Ils nous ont fait confiance"
          title="Ce que disent nos propriétaires."
          description="Des avis vérifiés de propriétaires accompagnés par ImmoZen Groupe."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.author} delay={index * 60}>
              <figure className="flex h-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-[0_10px_40px_-24px_rgba(16,18,15,0.25)]">
                <div aria-hidden="true" className="flex gap-0.5 text-brand-pistachio-dark">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < item.rating} />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-brand-ink/80">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <figcaption className="mt-auto text-sm font-semibold text-brand-ink">
                  {item.author}
                  <span className="block text-xs font-normal text-brand-ink/50">
                    {item.context}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"}>
      <path
        d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.2 6.6-5.8-3.2-5.8 3.2 1.2-6.6-4.9-4.6 6.6-.8L12 2.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
