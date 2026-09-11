import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Navbar } from "@/components/layout/Navbar";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FAQ_ITEMS, FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { OwnerLeadSection } from "@/components/sections/OwnerLeadSection";
import { PropertyTypesSection } from "@/components/sections/PropertyTypesSection";
import { SavingsSection } from "@/components/sections/SavingsSection";
import { faqJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      {/* FAQPage : construit depuis FAQ_ITEMS, la même source que la section
          FAQ visible juste en dessous — le balisage reste toujours identique
          au contenu affiché à l'utilisateur. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_ITEMS)) }}
      />
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <BenefitsSection />
        <SavingsSection />
        <PropertyTypesSection />
        <HowItWorksSection />
        <FaqSection />
        <OwnerLeadSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
