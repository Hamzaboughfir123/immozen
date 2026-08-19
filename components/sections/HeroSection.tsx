import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const PROPERTY_KINDS = [
  "Appartement",
  "Villa",
  "Terrain",
  "Commerce",
  "Riad",
  "Immeuble",
];

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-brand-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-marrakech.jpg"
          alt="La Koutoubia au coucher du soleil, entourée de palmiers, symbole de Marrakech et du patrimoine immobilier haut de gamme"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/70 to-brand-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/80 via-brand-ink/20 to-transparent" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center gap-8 py-10">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-pistachio/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-pistachio backdrop-blur-sm ring-1 ring-brand-pistachio/30">
            Agence immobilière nouvelle génération · Maroc
          </span>

          <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Propriétaires,
            <br />
            ne payez plus de{" "}
            <span className="text-brand-pistachio">commission d&rsquo;agence.</span>
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/80 sm:text-lg">
            Confiez la vente ou la location de votre bien à ImmoZen Groupe.
            <br className="hidden sm:block" /> 0 DH de commission pour le
            propriétaire.*
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#confier-mon-bien" size="lg">
              Je confie mon bien à ImmoZen Groupe
            </Button>
            <Button href="#simulateur" variant="outline" size="lg">
              Estimer mon économie
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/15 pt-6 text-sm text-white/60">
          {PROPERTY_KINDS.map((kind, i) => (
            <span key={kind} className="flex items-center gap-3">
              {kind}
              {i < PROPERTY_KINDS.length - 1 ? (
                <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
              ) : null}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
