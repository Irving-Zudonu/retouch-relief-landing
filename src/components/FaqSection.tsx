import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What file formats do you accept?",
    answer: "I work with all major formats including RAW files (CR2, NEF, ARW), TIFF, PSD, and high-quality JPEG. RAW files are preferred for the best results as they give me more flexibility in post-processing."
  },
  {
    question: "Can you match my current editing style?",
    answer: "Absolutely! That's one of my specialties. Send me 2-3 examples of your edited work along with the RAW files, and I'll study your style to ensure consistency. Most photographers are amazed at how closely I can match their aesthetic."
  },
  {
    question: "Do you offer batch editing for studios?",
    answer: "Yes, I offer special rates for bulk orders and ongoing partnerships with studios. Whether it's 10 images or 100, I can handle volume work while maintaining consistent quality and meeting deadlines."
  },
  {
    question: "How do I send my files securely?",
    answer: "I work with any secure file sharing method you prefer - Dropbox, Google Drive, WeTransfer, or FTP. All files are handled with complete confidentiality and deleted after project completion unless you request otherwise."
  },
  {
    question: "What's your typical turnaround time?",
    answer: "Standard turnaround is 48 hours for up to 5 images. For larger batches, I provide a clear timeline upfront. Rush orders can often be accommodated for urgent deadlines - just let me know your needs."
  }
];

export const FaqSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working together
          </p>
        </div>

        <div className="animate-fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-card px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};