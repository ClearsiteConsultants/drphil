import { CheckCircle, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "EV Certified",
    description: "Our technicians are specifically trained in electric vehicle systems and high-voltage safety."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most repairs completed within 24-48 hours. We know you want to get back on the trail."
  },
  {
    icon: Users,
    title: "Rider Owned",
    description: "Founded by electric dirtbike enthusiasts who understand what riders need."
  }
];

const benefits = [
  "Transparent pricing with no hidden fees",
  "Free diagnostics on all repairs",
  "90-day warranty on all work",
  "Genuine OEM and quality aftermarket parts",
  "Pickup and delivery available",
  "Loaner bikes for extended repairs"
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-primary font-medium mb-2 tracking-wider uppercase">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              BUILT BY RIDERS,{' '}
              <span className="text-primary">FOR RIDERS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not just mechanics – we're passionate electric dirtbike riders who understand the unique needs of EV owners. Our shop is equipped with the latest diagnostic tools and our team stays current with evolving EV technology.
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
