import retoucherImage from "@/assets/retoucher-headshot.jpg";

export const PersonalMessage = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <img
                src={retoucherImage}
                alt="Retoucher Irving"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-soft"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="text-lg">
                  Hey 👋,
                </p>
                
                <p>
                  I know how hectic things can get, juggling shoots, deadlines, and hours of post-production.
                </p>
                
                <p>
                  I specialize in high-end portrait, fashion, and beauty retouching with natural, magazine-quality results. 
                  My goal is to match your unique editing style and be the partner you can rely on for consistent delivery.
                </p>
                
                <p>
                  If you're open to it, I'd love to retouch 1 image for free — just to show how well we vibe.
                </p>
                
                <p className="text-accent font-medium">
                  Looking forward to helping you lighten the load ✌️<br />
                  — Retoucher Irving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};