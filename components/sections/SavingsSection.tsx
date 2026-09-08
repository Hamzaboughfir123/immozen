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
      </Container>
    </section>
  );
}


