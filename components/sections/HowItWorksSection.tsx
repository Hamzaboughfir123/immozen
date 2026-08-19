import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Vous nous confiez votre bien",
    text: "Un premier échange pour comprendre votre bien et votre projet — sans engagement.",
  },
  {
    number: "02",
    title: "Nous préparons sa commercialisation",
    text: "Valorisation, contenu premium, stratégie de diffusion : on met toutes les chances de votre côté.",
  },
  {
    number: "03",
    title: "Nous recherchons les acquéreurs ou locataires",
    text: "Notre réseau de 300+ agences partenaires et nos outils digitaux traquent le bon profil, au bon prix.",
  },
  {
    number: "04",
    title: "Votre transaction est réalisée",
    text: "Négociation, signature, accompagnement : on reste avec vous jusqu'au bout.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-brand-beige/50 py-10 sm:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-forest">
              Comment ça marche
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] sm:text-4xl">
              Vendre ou louer : simple, rapide, sans commission.
            </h2>

            <div className="mt-5 rounded-3xl bg-brand-forest p-5 text-white">
              <p className="font-display text-3xl font-medium text-brand-pistachio">
                0 DH
              </p>
              <p className="mt-1 text-sm leading-snug text-white/80">
                de commission ImmoZen Groupe pour le propriétaire.*
              </p>
            </div>
          </div>

          <ol className="relative flex flex-col gap-3">
            <div
              className="absolute left-9 top-9 bottom-9 w-0.5 bg-gradient-to-b from-brand-forest via-brand-forest/40 to-transparent"
              aria-hidden="true"
            />
            {STEPS.map((step, index) => {
              const isLast = index === STEPS.length - 1;
              return (
                <Reveal key={step.number} delay={index * 80}>
                  <li
                    className={`relative flex gap-4 rounded-2xl p-4 shadow-[0_10px_40px_-24px_rgba(16,18,15,0.25)] transition-all duration-300 hover:-translate-y-1 ${
                      isLast ? "bg-brand-forest text-white" : "bg-white"
                    }`}
                  >
                    <span
                      className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-base font-bold ring-4 ${
                        isLast
                          ? "bg-brand-pistachio text-brand-ink ring-brand-forest"
                          : "bg-brand-forest text-brand-pistachio ring-brand-beige/50"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <p
                        className={`font-display text-base font-semibold ${isLast ? "text-white" : "text-brand-ink"}`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`mt-1 text-sm leading-snug ${isLast ? "text-white/80" : "text-brand-ink/65"}`}
                      >
                        {step.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
