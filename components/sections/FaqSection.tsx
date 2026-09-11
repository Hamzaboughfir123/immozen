import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Source unique pour la FAQ visible ci-dessous ET pour le JSON-LD FAQPage
 * injecté dans app/page.tsx (`faqJsonLd(FAQ_ITEMS)`) — garantit que les
 * données structurées correspondent toujours au contenu réellement affiché,
 * comme l'exigent les guidelines Google sur le balisage FAQPage.
 */
export const FAQ_ITEMS = [
  {
    question: "Comment vendre son bien immobilier à Marrakech avec ImmoZen Groupe ?",
    answer:
      "Vous confiez votre appartement, villa, riad, terrain ou immeuble à ImmoZen Groupe : nous valorisons le bien, le diffusons auprès de notre réseau de 300+ agences partenaires, puis vous accompagnons jusqu'à la signature, sans commission à votre charge.*",
  },
  {
    question: "Le propriétaire paie-t-il une commission avec ImmoZen Groupe ?",
    answer:
      "Non. ImmoZen Groupe applique 0 DH de commission pour le propriétaire, que ce soit pour la vente ou la location de son bien, selon les conditions applicables.*",
  },
  {
    question: "Comment confier mon appartement ou ma villa à ImmoZen Marrakech ?",
    answer:
      "Contactez-nous par téléphone ou WhatsApp au +212 775 918 796 : un expert ImmoZen Groupe étudie votre projet et vous recontacte rapidement, sans engagement.",
  },
  {
    question: "Quels types de biens ImmoZen Groupe prend-il en charge ?",
    answer:
      "ImmoZen Groupe accompagne la vente et la location d'appartements, villas, riads, terrains, commerces et immeubles, avec Marrakech comme zone d'intervention prioritaire.",
  },
  {
    question: "ImmoZen Groupe s'occupe-t-il aussi de la location ?",
    answer:
      "Oui. ImmoZen Groupe accompagne aussi bien la vente que la location de biens immobiliers, avec le même engagement : 0 DH de commission pour le propriétaire.",
  },
  {
    question: "Comment fonctionne l'offre 0 DH de commission propriétaire ?",
    answer:
      "ImmoZen Groupe se rémunère sans facturer de commission au propriétaire du bien vendu ou loué, selon les conditions applicables au service. Un expert vous en détaille précisément les modalités dès le premier échange.",
  },
  {
    question: "Quels frais restent éventuellement à la charge du propriétaire ?",
    answer:
      "Les conditions exactes (frais éventuels, documents nécessaires) vous sont précisées en toute transparence par un expert ImmoZen Groupe avant tout engagement. L'offre 0 DH s'applique à la commission du propriétaire, selon les conditions en vigueur.*",
  },
] as const;

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Vendre ou louer à Marrakech, vos questions de propriétaire."
          description="Les réponses essentielles pour confier votre bien à ImmoZen Groupe en toute confiance."
        />

        <div className="mt-8 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.question} delay={index * 50}>
              <details className="group rounded-2xl border border-brand-ink/10 bg-brand-beige/30 p-5 open:bg-white open:shadow-[0_10px_40px_-24px_rgba(16,18,15,0.25)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-brand-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-forest/10 text-brand-forest transition-transform duration-200 group-open:rotate-45"
                  >
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
