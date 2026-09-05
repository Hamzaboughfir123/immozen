import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const PROPERTY_KINDS = ["Appartement", "Villa", "Terrain", "Commerce", "Riad", "Immeuble"];

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-brand-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-marrakech-sans-mosquee.png"
          alt="Panorama de Marrakech et de ses palmiers au coucher du soleil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/60 via-brand-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent" />
      </div>

      <Container className="hero-layout relative">
        <span className="hero-eyebrow">
          <span>Agence immobilière</span>{" "}
          <span>nouvelle génération · Maroc</span>
        </span>

        <h1 className="hero-title font-display font-semibold text-white">
          <span>Propriétaires,</span>
          <span>ne payez plus de</span>
          <span className="text-brand-pistachio">commission d’agence.</span>
        </h1>

        <div className="hero-network">
          <span className="hero-crown" aria-hidden="true">
            <CrownIcon className="h-7 w-7" />
          </span>
          <div>
            <strong className="font-display text-brand-pistachio">0 DH</strong>
            <p>de commission pour les propriétaires.*</p>
          </div>
        </div>

        <div className="hero-description text-white/90">
          <p>Confiez la vente ou la location de votre bien à ImmoZen Groupe.</p>
          <div className="hero-location">
            <span className="shrink-0 text-brand-pistachio"><LocationIcon /></span>
            <p><strong className="text-brand-pistachio">Priorité Marrakech</strong> · Rabat · Casablanca · Tanger · Agadir</p>
          </div>
        </div>

        <div className="hero-actions">
          <Button href="#confier-mon-bien" size="lg">Je confie mon bien à ImmoZen Groupe</Button>
          <Button href="#simulateur" variant="outline" size="lg">Estimer mon économie</Button>
        </div>

        <div className="hero-properties text-white/60">
          {PROPERTY_KINDS.map((kind, i) => (
            <span key={kind} className="flex items-center gap-3">
              {kind}
              {i < PROPERTY_KINDS.length - 1 && <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 7l4.2 3.2L12 4l4.8 6.2L21 7l-2 10H5L3 7z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}
