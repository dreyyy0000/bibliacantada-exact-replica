import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import CTAButton from "@/components/CTAButton";
import IntroSection from "@/components/IntroSection";
import CollectionPreview from "@/components/CollectionPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import AccessSection from "@/components/AccessSection";
import CanteAdoreSection from "@/components/CanteAdoreSection";
import NewConnectionSection from "@/components/NewConnectionSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import BonusSection from "@/components/BonusSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MusicSection />
      
      <div className="py-8 px-4">
        <CTAButton text="CLIQUE PARA OUVIR E BAIXAR TODAS AS MÚSICAS AGORA MESMO" />
      </div>
      
      <IntroSection />
      <CollectionPreview />
      <TestimonialsSection />
      <AccessSection />
      <NewConnectionSection />
      <CanteAdoreSection />
      <WhatYouGetSection />
      <BonusSection />
      <GuaranteeSection />
      <PricingSection />
      <ExperienceSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
