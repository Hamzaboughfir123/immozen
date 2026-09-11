import { SavingsCalculator } from "@/components/interactive/SavingsCalculator";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SavingsSection() {
  return (
    <section id="simulateur" className="savings-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Votre économie"
          title={<>Calculez votre économie <span>en 10 secondes.</span></>}
          description="Votre bien vaut cher. Sa vente ne devrait rien coûter aux propriétaires au Maroc."
          className="savings-heading"
        />

        <Reveal className="savings-calculator-wrap" delay={100}>
          <SavingsCalculator />
        </Reveal>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-brand-ink/60">
          Exemple : pour un bien vendu 1 500 000 DH, une commission d&rsquo;agence
          traditionnelle de 2,5 % représente 37 500 DH. Avec ImmoZen Groupe, cette
          commission reste à 0 DH pour le propriétaire, selon les conditions
          applicables.* Simulation illustrative, non contractuelle — le taux
          traditionnel varie selon les agences.
        </p>
      </Container>
    </section>
  );
}


