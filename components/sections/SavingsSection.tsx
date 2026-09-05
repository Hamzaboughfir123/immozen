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
          title="Calculez votre économie en 10 secondes."
          description="Votre bien vaut cher. Sa vente ne devrait rien coûter aux propriétaires au Maroc."
          className="savings-heading"
        />

        <Reveal className="mt-6 sm:mt-8" delay={100}>
          <SavingsCalculator />
        </Reveal>
      </Container>
    </section>
  );
}
