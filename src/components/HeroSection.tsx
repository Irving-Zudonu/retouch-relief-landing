import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          Tired of Spending Your{" "}
          <span className="text-accent">Nights in Photoshop?</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Let me handle the retouching while you focus on growing your photography business.
        </p>

        <div className="pt-8">
          <Button
            variant="cta"
            size="xl"
            onClick={onCtaClick}
            className="animate-fade-in-up"
          >
            Get Free Test Edit in 48 Hours
          </Button>
        </div>

        <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm text-muted-foreground">
            No commitment • 48-hour guarantee • Your style preserved
          </p>
        </div>
      </div>
    </section>
  );
};