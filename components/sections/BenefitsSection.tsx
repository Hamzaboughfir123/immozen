import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BENEFITS = [
  {
    icon: ZeroIcon,
    title: "0 DH propriétaire",
    text: "Notre réussite, c'est de vendre votre bien — pas de vous facturer. 0 DH de commission ImmoZen Groupe, selon les conditions applicables.*",
    highlight: true,
  },
  {
    icon: SparkIcon,
    title: "IA & Technologie",
    text: "Nos outils nouvelle génération valorisent votre bien et le placent devant les bons acheteurs, plus vite.",
    highlight: false,
  },
  {
    icon: EyeIcon,
    title: "Visibilité",
    text: "Votre bien diffusé massivement, là où se trouvent vraiment vos futurs acquéreurs et locataires.",
    highlight: false,
  },
  {
    icon: HandshakeIcon,
    title: "Accompagnement",
    text: "Un seul interlocuteur, disponible à chaque étape, de la prise de mandat jusqu'à la signature.",
    highlight: false,
  },
];

export function BenefitsSection() {
  return (
    <section id="pourquoi-immozen" className="bg-white py-10 sm:py-14">
      <Container>
        <SectionHeading
          eyebrow="La nouvelle référence de l'immobilier au Maroc"
          title={
            <>
              L&rsquo;immobilier change.
              <br className="hidden sm:block" /> Votre agence aussi.
            </>
          }
          description="ImmoZen Groupe associe la puissance de son réseau, la technologie et un accompagnement humain à la garantie 0 DH de commission pour vous, propriétaire au Maroc."
        />

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div
                className={`group relative h-full overflow-visible rounded-3xl p-5 transition-all duration-300 ${
                  benefit.highlight
                    ? "bg-brand-forest text-white shadow-[0_20px_60px_-20px_rgba(6,115,61,0.5)]"
                    : "bg-brand-beige/60 text-brand-ink hover:bg-brand-beige hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(16,18,15,0.35)]"
                }`}
              >
                {benefit.highlight ? (
                  <span className="absolute -right-3 -top-3 flex h-14 w-14 rotate-12 flex-col items-center justify-center rounded-full border-2 border-dashed border-brand-pistachio bg-brand-ink text-center text-[9px] font-bold uppercase leading-tight text-brand-pistachio shadow-lg">
                    100%
                    <br />
                    garanti
                  </span>
                ) : null}
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-2xl ${
                    benefit.highlight
                      ? "bg-brand-pistachio text-brand-ink"
                      : "bg-white text-brand-forest"
                  }`}
                >
                  <benefit.icon />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {benefit.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-snug ${
                    benefit.highlight ? "text-white/85" : "text-brand-ink/65"
                  }`}
                >
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex justify-center" delay={320}>
          <Button href="#confier-mon-bien" size="lg">
            Je confie mon bien à ImmoZen Groupe
          </Button>
        </Reveal>
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
