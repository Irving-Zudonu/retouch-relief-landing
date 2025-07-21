import { Clock, RotateCcw, Sparkles, Palette, Users, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "48-hour turnaround guaranteed",
    description: "Fast, reliable delivery you can count on"
  },
  {
    icon: RotateCcw,
    title: "Unlimited revisions until you're happy",
    description: "Perfect results, no matter how many rounds it takes"
  },
  {
    icon: Sparkles,
    title: "Edits that preserve real skin texture",
    description: "No plastic look - natural, authentic results"
  },
  {
    icon: Palette,
    title: "Your style, not mine",
    description: "I adapt to match your unique editing aesthetic"
  },
  {
    icon: Users,
    title: "200+ photographers served since 2019",
    description: "Trusted by professionals worldwide"
  },
  {
    icon: Handshake,
    title: "Long-term editing partner, not a one-time gig",
    description: "Build a lasting relationship with consistent quality"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Photographers Choose Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reliable, professional retouching that saves you time without compromising your vision.
            <br />
            <span className="text-sm mt-2 inline-block">
              Don't just take my word for it — <a href="#testimonials" className="text-accent hover:underline">see what photographers say</a>
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start mb-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed ml-5">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};