import { Button } from "@/components/ui/button";

interface NavigationProps {
  onCtaClick: () => void;
}

export const Navigation = ({ onCtaClick }: NavigationProps) => {
  return (
    <nav className="bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <span className="text-secondary-foreground font-bold text-lg">
              RETOUCHER IRVING
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-secondary-foreground hover:text-accent font-medium">
                HOME
              </a>
              <a href="#" className="text-secondary-foreground hover:text-accent font-medium">
                ABOUT US
              </a>
              <a href="#" className="text-secondary-foreground hover:text-accent font-medium">
                SERVICES
              </a>
              <a href="#" className="text-secondary-foreground hover:text-accent font-medium">
                PORTFOLIO
              </a>
              <a href="#" className="text-secondary-foreground hover:text-accent font-medium">
                CONTACT
              </a>
            </div>
          </div>
          <Button
            variant="blackFriday"
            size="sm"
            onClick={onCtaClick}
            className="hidden md:inline-flex"
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </nav>
  );
};