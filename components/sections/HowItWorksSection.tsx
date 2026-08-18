import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Vous nous confiez votre bien",
    text: "Nous découvrons votre propriété et votre projet.",
  },
  {
    number: "02",
    title: "Nous préparons sa commercialisation",
    text: "Valorisation, contenu, diffusion, outils technologiques et stratégie.",
  },
  {
    number: "03",
    title: "Nous recherchons les acquéreurs ou locataires",
    text: "ImmoZen utilise son réseau, ses outils digitaux et ses canaux de diffusion.",
  },
  {
    number: "04",
    title: "Votre transaction est réalisée",
    text: "Accompagnement jusqu'à la finalisation de la transaction.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-brand-beige/50 py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-forest">
              Comment ça marche
            </span>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.1] sm:text-5xl">
              Vendre ou louer, sans les tracas. On s&rsquo;occupe de tout.
            </h2>

            <div className="mt-10 rounded-3xl bg-brand-forest p-8 text-white">
              <p className="font-display text-4xl font-medium text-brand-pistachio">
                0 DH
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                de commission ImmoZen pour le propriétaire.*
              </p>
            </div>
          </div>

          <ol className="flex flex-col gap-4">
            {STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <li className="flex gap-6 rounded-2xl bg-white p-6 shadow-[0_10px_40px_-24px_rgba(16,18,15,0.25)]">
                  <span className="font-display text-2xl font-medium text-brand-pistachio-dark">
                    {step.number}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-brand-ink">
                      {step.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/65">
                      {step.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
