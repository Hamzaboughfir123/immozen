import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BENEFITS = [
  {
    icon: SparkIcon,
    title: "IA & Technologie",
    text: "Des outils nouvelle génération pour valoriser et commercialiser les biens.",
    highlight: false,
  },
  {
    icon: EyeIcon,
    title: "Visibilité",
    text: "Une stratégie de diffusion pensée pour toucher davantage d'acquéreurs et de locataires potentiels.",
    highlight: false,
  },
  {
    icon: HandshakeIcon,
    title: "Accompagnement",
    text: "Un interlocuteur accompagne le propriétaire de la prise de mandat jusqu'à la transaction.",
    highlight: false,
  },
  {
    icon: ZeroIcon,
    title: "0 DH propriétaire",
    text: "Le propriétaire ne paie aucune commission ImmoZen sur la transaction, selon les conditions applicables.*",
    highlight: true,
  },
];

export function BenefitsSection() {
  return (
    <section id="pourquoi-immozen" className="bg-white py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Une nouvelle génération d'agence immobilière"
          title={
            <>
              L&rsquo;immobilier change.
              <br className="hidden sm:block" /> Votre agence aussi.
            </>
          }
          description="Le partenaire privilégié des propriétaires au Maroc : ImmoZen s'appuie sur un réseau de plus de 300 agences partenaires, au Maroc et à l'international, porté par l'expertise humaine et l'intelligence artificielle."
        />

        <Reveal className="mt-8" delay={40}>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-brand-forest/5 px-6 py-4 ring-1 ring-brand-forest/10 sm:gap-5">
            <span className="font-display text-3xl font-semibold text-brand-forest">
              300+
            </span>
            <span className="text-sm leading-snug text-brand-ink/70 sm:text-base">
              agences partenaires réunies dans un même réseau, au Maroc et à l&rsquo;international.
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div
                className={`group h-full rounded-3xl p-8 transition-all duration-300 ${
                  benefit.highlight
                    ? "bg-brand-forest text-white shadow-[0_20px_60px_-20px_rgba(6,115,61,0.5)]"
                    : "bg-brand-beige/60 text-brand-ink hover:bg-brand-beige"
                }`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    benefit.highlight
                      ? "bg-brand-pistachio text-brand-ink"
                      : "bg-white text-brand-forest"
                  }`}
                >
                  <benefit.icon />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {benefit.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    benefit.highlight ? "text-white/85" : "text-brand-ink/65"
                  }`}
                >
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 11l4-4 4 3 4-3 4 4M7 10l4 5 4-5M5 12l-2 3 3 3M19 12l2 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ZeroIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 16L16 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
