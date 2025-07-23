import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_odszac8";
const EMAILJS_TEMPLATE_ID = "template_b10vmnj";
const EMAILJS_PUBLIC_KEY = "W58OM17CoXbROACl6";
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fileLink: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Send email using EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        file_link: formData.fileLink,
        message: formData.message,
        to_email: "hello@retoucherirving.com"
      }, EMAILJS_PUBLIC_KEY);
      toast({
        title: "Request Submitted Successfully! 🎉",
        description: "Thanks! Your test image is in safe hands, I'll return the edit within 48 hours."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        fileLink: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error Sending Request",
        description: "Please try again or contact me directly at hello@retoucherirving.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="py-20 px-4 bg-gradient-hero">
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
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fileLink">Dropbox/Google Drive Link to Your Image *</Label>
              <Input id="fileLink" name="fileLink" value={formData.fileLink} onChange={handleChange} required placeholder="https://dropbox.com/your-image-link" />
              <p className="text-sm text-muted-foreground">
                Upload your image to Dropbox or Google Drive and share the link here
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details (Optional)</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your style preferences, specific areas to focus on, or any other details..." rows={4} />
            </div>

            <Button type="submit" variant="cta" size="lg" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Get My Free Test Edit"}
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Upload 1 image and I'll return a professionally retouched version within 48 hours, FREE.</p>
              <p className="text-xs text-accent font-medium">
                ⚡ Only accepting 5 free test edits per week
              </p>
              <p className="text-sm text-muted-foreground">No payment required. You keep the result.</p>
            </div>
            
            <div className="flex justify-center gap-6 pt-8 border-t border-border mt-8">
              <a href="https://www.instagram.com/retoucherirving" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              
              <a href="https://www.facebook.com/retoucherirving1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>;
};