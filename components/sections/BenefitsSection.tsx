import { OwnersCtaTrigger } from "@/components/property-lead/OwnersCtaTrigger";
import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "0 DH propriétaire",
    text: "Aucune commission pour le propriétaire, selon les conditions applicables.*",
  },
  {
    number: "02",
    title: "Votre bien valorisé",
    text: "Une présentation soignée pour attirer l’attention dès le premier regard.",
  },
  {
    number: "03",
    title: "Vente ou location",
    text: "Appartement, villa, riad, terrain ou commerce : parlons de votre projet.",
  },
  {
    number: "04",
    title: "À vos côtés",
    text: "Un accompagnement clair des premiers échanges jusqu’à la signature.",
  },
];

export function BenefitsSection() {
  return (
    <section id="pourquoi-immozen" aria-labelledby="benefits-title" className="owners-campaign">
      <div className="owners-content">
        <div className="owners-top">
          <div className="owners-heading">
            <p className="owners-kicker">Propriétaires à Marrakech</p>
            <h2 id="benefits-title">Vendez ou louez votre bien. <span>0 DH de commission.*</span></h2>
            <p className="owners-intro">Confiez votre bien à ImmoZen Groupe. Nous vous accompagnons à chaque étape.</p>
          </div>
          <div className="owners-visual">
            <div className="owners-visual-image">
              <Image
                src="/images/property-types/villa.jpg"
                alt="Villa à Marrakech"
                fill
                sizes="(max-width: 767px) 100vw, 36vw"
                className="object-cover"
              />
            </div>
            <div className="owners-zero" aria-label="0 DH de commission propriétaire">
              <strong>0 DH</strong>
              <span>de commission<br />propriétaire*</span>
            </div>
          </div>
        </div>

        <div className="owners-cards">
          {benefits.map((benefit, index) => (
            <article key={benefit.number} className={`owners-card${index === 0 ? " owners-card-featured" : ""}`}>
              <span className="owners-number" aria-hidden="true">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>

        <div className="owners-bottom">
          <ul className="owners-reassurance">
            <li>Un seul interlocuteur</li>
            <li>Un suivi clair</li>
            <li>Sans commission propriétaire*</li>
          </ul>
          <OwnersCtaTrigger>
            <span>Confier mon bien</span>
            <span aria-hidden="true">→</span>
          </OwnersCtaTrigger>
        </div>
      </div>
    </section>
  );
}
