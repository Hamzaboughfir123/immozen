import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function BenefitsSection() {
  return (
    <section
      id="pourquoi-immozen"
      aria-labelledby="benefits-title"
      className="benefits-campaign"
    >
      <Container className="benefits-container">
        <div className="benefits-main">
          <div>
            <p className="benefits-kicker">
              Vous vendez ou vous louez ?
            </p>
            <h2 id="benefits-title" className="benefits-title font-display">
              Votre bien en lumière.
              <span className="block text-brand-forest">La commission en moins.</span>
            </h2>
            <p className="benefits-description">
              Donnez envie de visiter. Touchez plus d’acheteurs et de locataires.
              Et gardez l’esprit tranquille : votre conseiller s’occupe de vous.
            </p>
          </div>

          <div className="benefits-visual relative isolate overflow-hidden rounded-3xl bg-brand-ink text-white">
            <Image
              src="/images/property-types/villa.jpg"
              alt="Piscine et terrasse ensoleillée entourées de verdure"
              fill
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/25 to-transparent" />
            <div className="benefits-poster relative">
              <span className="self-start rounded-full bg-brand-beige px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-forest-dark">
                Spécial propriétaires
              </span>
              <div className="benefits-offer">
                <p className="flex items-baseline gap-3 text-brand-pistachio">
                  <span className="benefits-zero font-display font-semibold">0</span>
                  <span className="benefits-currency font-bold">DH</span>
                </p>
                <p className="benefits-offer-caption font-semibold">
                  de commission<br />pour vous, propriétaire.*
                </p>
                <p className="mt-3 text-sm text-white/80">Avec ImmoZen Groupe</p>
              </div>
            </div>
          </div>

          <div className="benefits-action">
            <Button
              href="#confier-mon-bien"
              size="lg"
              className="min-h-12 w-full whitespace-normal text-center sm:w-auto"
            >
              Je confie mon bien sans commission
              <span aria-hidden="true" className="shrink-0 text-xl">↗</span>
            </Button>
            <p className="mt-2 text-sm text-brand-ink/70">Votre prochain projet commence ici.</p>
          </div>
        </div>

        <div className="benefits-proof">
          <p className="text-sm leading-relaxed text-brand-ink/75">
            <strong className="block font-display text-2xl font-semibold text-brand-forest">300+ agences</strong>
            Un réseau pour faire rayonner votre bien.
          </p>
          <p className="text-sm leading-relaxed text-brand-ink/75">
            <strong className="mb-1 block text-base font-semibold text-brand-ink">Un bien qui donne envie</strong>
            Vos atouts mis en avant pour attirer les regards.
          </p>
          <p className="text-sm leading-relaxed text-brand-ink/75">
            <strong className="mb-1 block text-base font-semibold text-brand-ink">Un conseiller à vos côtés</strong>
            Du premier échange jusqu’à la signature.
          </p>
        </div>
      </Container>
    </section>
  );
}
