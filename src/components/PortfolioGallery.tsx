import { useState } from "react";
import { Button } from "@/components/ui/button";
const portraitBefore = "/lovable-uploads/d647d840-86c6-45cb-b4e5-e854fec3a053.png";
const portraitAfter = "/lovable-uploads/d75eea95-2a8a-4451-93c8-4d10eee8ed08.png";
const beautyBefore = "/lovable-uploads/77628f65-5988-4704-8c3e-e0c46ad0cf4b.png";
const beautyAfter = "/lovable-uploads/a257a8f1-1380-413b-b889-5b18930bf3d5.png";
import newbornBefore from "@/assets/newborn-before.jpg";
import newbornAfter from "@/assets/newborn-after.jpg";
const fashionBefore = "/lovable-uploads/0b5e4982-6962-440d-82df-5a25d5a8dbce.png";
const fashionAfter = "/lovable-uploads/e3f186a6-5f6b-436e-b7be-15d7f34dffd0.png";

const portfolioItems = [
  { before: portraitBefore, after: portraitAfter, type: "Portrait" },
  { before: beautyBefore, after: beautyAfter, type: "Beauty" },
  { before: newbornBefore, after: newbornAfter, type: "Newborn" },
  { before: fashionBefore, after: fashionAfter, type: "Fashion" },
];

interface ComparisonImageProps {
  before: string;
  after: string;
  type: string;
}

const ComparisonImage = ({ before, after, type }: ComparisonImageProps) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-all duration-300"
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
    >
      <div className="aspect-[3/4] relative bg-muted/20">
        <img
          src={before}
          alt={`${type} - Before`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
            showAfter ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={after}
          alt={`${type} - After`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
            showAfter ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
            {type}
          </span>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-sm font-medium text-foreground">
              {showAfter ? 'After' : 'Before'}
            </span>
            <p className="text-xs text-muted-foreground mt-1">
              Hover to see transformation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PortfolioGallery = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Before/After Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            See the transformation. Natural results that preserve authentic skin texture.
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            All edits preserve natural skin tone, authentic lighting, and your unique editing style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
          {portfolioItems.map((item, index) => (
            <ComparisonImage
              key={index}
              before={item.before}
              after={item.after}
              type={item.type}
            />
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://www.behance.net/gallery/123300611/BEFORE-AND-AFTER-PORTFOLIO', '_blank')}
          >
            See Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};