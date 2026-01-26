import { CheckCircle, Calendar, Zap, Award, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Same-Day Availability",
    description: "Get appointments fast. No long waiting lists – we make time for you when you need it."
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Treatment tailored to your unique needs, not a one-size-fits-all approach."
  },
  {
    icon: Zap,
    title: "Expert Training",
    description: "25+ years of experience combining chiropractic, sports medicine, and neuro expertise."
  }
];

const benefits = [
  "Free consultation to discuss your health goals",
  "45-60 minute initial appointments (not rushed)",
  "No waiting room stress or time wasted",
  "Professional discounts available",
  "Convenient home or office locations"
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">Who We Are</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              CARE BUILT ON{' '}
              <span className="text-primary">EXPERTISE & COMPASSION</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Dr. Phil Wilkins combines decades of experience in sports medicine, chiropractic care, and advanced neurophysiology training to provide world-class care in your home or office.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
