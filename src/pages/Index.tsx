import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PersonalMessage } from "@/components/PersonalMessage";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { StickyCta } from "@/components/StickyCta";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCtaClick={scrollToContact} />
      <HeroSection onCtaClick={scrollToContact} />
      <PersonalMessage />
      <PortfolioGallery />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactForm />
      <StickyCta onCtaClick={scrollToContact} />
    </div>
  );
};

export default Index;
