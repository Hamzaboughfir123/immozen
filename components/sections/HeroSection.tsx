import { Button } from "@/components/ui/Button";
import { OpenPropertyLeadButton } from "@/components/property-lead/OpenPropertyLeadButton";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="accueil" className="hero-campaign" aria-labelledby="hero-heading">
      <div className="hero-visual">
        <Image
          src="/images/hero-interieur-marrakech-v2.png"
          alt="Salon lumineux ouvert sur une piscine, les palmiers de Marrakech et les montagnes de l’Atlas"
          fill
          priority
          sizes="(max-width: 767px) 45vw, 68vw"
          className="hero-photo"
        />
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">Agence immobilière à Marrakech</p>
          <h1 id="hero-heading" className="hero-title">
            <span>Votre bien.</span>
            <span>Notre mission.</span>
          </h1>
          <div className="hero-offer">
            <p className="hero-zero">0 DH</p>
            <p className="hero-offer-label">De commission<br />propriétaire<span>*</span></p>
          </div>
          <p className="hero-services">Vente et location</p>
          <div className="hero-actions">
            <OpenPropertyLeadButton size="lg">Confier mon bien <span aria-hidden="true">↗</span></OpenPropertyLeadButton>
            <Button href="#simulateur" variant="ghost" size="lg">Estimer mon économie <span aria-hidden="true">→</span></Button>
          </div>
          <p className="hero-footnote">* Pour les propriétaires vendeurs et bailleurs.</p>
        </div>
      </div>
    </section>
  );
}
