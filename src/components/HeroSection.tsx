import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          Tired of Spending Your{" "}
          <span className="text-accent">Nights in Photoshop?</span>
        </h1>
        
        <div className="pt-6">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let me handle the retouching while you focus on growing your photography business.
          </p>
        </div>

        <div className="pt-12">
          <Button
            variant="cta"
            size="xl"
            onClick={onCtaClick}
            className="animate-fade-in-up"
          >
            Get Free Test Edit in 48 Hours
          </Button>
        </div>

        <div className="pt-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span className="flex items-center gap-1">
              <span>No commitment</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-accent">⭐</span>
              <span>48-hour guarantee</span>
            </span>
            <span>•</span>
            <span>Your style preserved</span>
          </p>
        </div>
      </div>
    </section>
  );
};