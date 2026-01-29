import { CheckCircle } from "lucide-react";

const steps = [
  {
    text: "If this is your first visit, Dr. Phil will arrive at your home or office at the convenient appointment time you choose. A review of your health history, filled out online beforehand, and a thorough examination will be performed. This initial visit will last between 45 minutes to 1 hour and will include your first chiropractic treatment if deemed appropriate."
  },
  {
    text: "Once your diagnosis and care plan is established, Dr. Phil will schedule a follow up appointment. Depending on your diagnosis, follow up appointments will generally last 30 minutes."
  },
  {
    text: "Dr. Phil is 100% mobile, which means that he will bring everything that he needs to provide you with comprehensive care. Each visit will be personalized to you so you can feel better faster and reach your health goals sooner!"
  }
];

const WhatToExpect = () => {
  return (
    <section id="what-to-expect" className="py-24 bg-muted/30" aria-labelledby="what-to-expect-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 id="what-to-expect-heading" className="font-display text-4xl md:text-5xl text-foreground text-center mb-12">
            What to Expect
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
