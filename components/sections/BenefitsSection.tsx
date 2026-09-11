import Image from "next/image";

const benefits = [
  { icon: "◎", title: "0 DH propriétaire", text: "Notre réussite, c’est de vendre votre bien — pas de vous facturer. 0 DH de commission ImmoZen Groupe, selon les conditions applicables.*" },
  { icon: "◇", title: "Votre bien en lumière", text: "Une présentation qui donne envie et met en valeur chaque atout de votre bien dès le premier regard." },
  { icon: "♧", title: "Les bons acheteurs", text: "Votre annonce gagne en visibilité auprès de personnes réellement prêtes à acheter ou à louer." },
  { icon: "♡", title: "À vos côtés", text: "Un accompagnement simple et humain, de la première visite jusqu’à la signature finale." },
];

export function BenefitsSection() {
  return (
    <section id="pourquoi-immozen" aria-labelledby="benefits-title" className="owners-campaign">
      <div className="owners-reference" aria-hidden="true">
        <Image src="/images/owners-campaign.webp" alt="" width={2007} height={783} sizes="100vw" loading="lazy" className="owners-reference-image" />
      </div>
      <div className="owners-content">
        <p className="owners-kicker">Propriétaires au Maroc</p>
        <h2 id="benefits-title">Votre bien mérite <span>une meilleure histoire.</span></h2>
        <p className="owners-intro">Nous faisons tout pour que votre bien se démarque, trouve le bon acquéreur et vous rapporte davantage, <strong>sans commission pour vous, propriétaire.</strong></p>
        <div className="owners-cards">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className={`owners-card${index === 0 ? " owners-card-featured" : ""}`}>
              <span className="owners-icon" aria-hidden="true">{benefit.icon}</span>
              {index === 0 && <span className="owners-guarantee">100%<br />GARANTI ✓</span>}
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
        <ul className="owners-reassurance"><li>Sûr et transparent</li><li>Gain de temps</li><li>Meilleure rentabilité</li></ul>
        <p className="owners-signature">Ensemble, votre projet avance !</p>
      </div>
      <a className="owners-cta" href="#confier-mon-bien"><span>Je confie mon bien à ImmoZen Groupe</span><span aria-hidden="true">→</span></a>
    </section>
  );
}

