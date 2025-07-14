import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fileLink: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted Successfully! 🎉",
      description: "Thanks! Your test image is in safe hands — I'll return the edit within 48 hours.",
    });

    setFormData({ name: "", email: "", fileLink: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready for Your Free Test Edit?
          </h2>
          <p className="text-lg text-muted-foreground">
            Send me one image and see the difference professional retouching makes
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-8 animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fileLink">Dropbox/Google Drive Link to Your Image *</Label>
              <Input
                id="fileLink"
                name="fileLink"
                value={formData.fileLink}
                onChange={handleChange}
                required
                placeholder="https://dropbox.com/your-image-link"
              />
              <p className="text-sm text-muted-foreground">
                Upload your image to Dropbox or Google Drive and share the link here
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your style preferences, specific areas to focus on, or any other details..."
                rows={4}
              />
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Submitting..." : "Get My Free Test Edit"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              No spam, no pressure. Just a free demonstration of professional retouching.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};