import { SavingsCalculator } from "@/components/interactive/SavingsCalculator";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SavingsSection() {
  return (
    <section id="simulateur" className="bg-brand-beige/50 py-28 sm:py-36">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Votre économie"
          title="Combien pourriez-vous économiser ?"
          description="Votre bien vaut cher. Pourquoi sa vente devrait-elle vous coûter cher ?"
          className="mx-auto"
        />

        <Reveal className="mt-14" delay={100}>
          <SavingsCalculator />
        </Reveal>
      </Container>
    </section>
  );
}
