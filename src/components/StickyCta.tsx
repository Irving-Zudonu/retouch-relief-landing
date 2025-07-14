import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface StickyCtaProps {
  onCtaClick: () => void;
}

export const StickyCta = ({ onCtaClick }: StickyCtaProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > window.innerHeight * 0.5;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-slide-in">
      <div className="bg-card rounded-xl shadow-soft border border-border p-4 flex items-center justify-between">
        <div className="flex-1 mr-4">
          <p className="text-sm font-medium text-foreground">
            Ready for your free edit?
          </p>
          <p className="text-xs text-muted-foreground">
            48-hour guarantee
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="cta"
            size="sm"
            onClick={onCtaClick}
            className="text-xs"
          >
            Get Started
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDismissed(true)}
            className="w-8 h-8"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};