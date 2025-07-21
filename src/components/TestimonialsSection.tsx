import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Portrait Photographer",
    location: "Los Angeles, CA",
    content: "Exactly the style I wanted — saved me hours this week!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Fashion Photographer",
    location: "New York, NY",
    content: "Flawless retouching, and super reliable delivery!",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Studio Owner",
    location: "Miami, FL",
    content: "My go-to partner for all my studio shoots.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Photographers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from photography professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};