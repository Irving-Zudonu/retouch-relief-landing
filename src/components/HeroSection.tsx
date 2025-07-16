import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-tight tracking-tight">
          TIRED OF SPENDING YOUR{" "}
          <span className="text-foreground">NIGHTS IN PHOTOSHOP?</span>
        </h1>
        
        <div className="pt-6">
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Let me handle the retouching while you focus on growing your photography business.
          </p>
        </div>

        <div className="pt-12">
          <Button
            variant="blackFriday"
            size="xl"
            onClick={onCtaClick}
            className="animate-fade-in-up"
          >
            GET FREE TEST EDIT
          </Button>
        </div>

        <div className="pt-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm text-foreground flex items-center justify-center gap-2 flex-wrap font-medium">
            <span className="flex items-center gap-1">
              <span>No commitment</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-foreground">⭐</span>
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