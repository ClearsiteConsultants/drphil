import { Wrench, Sparkles, CircleDot, SprayCan } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Parts Installation",
    description: "Professional installation of all components and upgrades for your electric dirtbike."
  },
  {
    icon: Sparkles,
    title: "Metal Polishing",
    description: "Restore the shine to your bike's metal parts with our expert polishing services."
  },
  {
    icon: CircleDot,
    title: "Tires & Tubes",
    description: "Tire mounting, tube replacement, and balancing to keep you rolling smoothly on any terrain."
  },
  {
    icon: SprayCan,
    title: "Bike Cleaning",
    description: "Thorough cleaning and detailing to keep your electric dirtbike looking brand new."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase">What We Do</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we've got your electric dirtbike covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-xl gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:box-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
