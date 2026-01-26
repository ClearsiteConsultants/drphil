import { Clock, Heart, Zap } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Convenience & Longer Appointments",
    description: "No waiting rooms. Dedicated time with your doctor in the comfort of your home or office."
  },
  {
    icon: Heart,
    title: "Personalized & Gentle Treatment",
    description: "Customized care based on your specific needs, health goals, and comfort preferences."
  },
  {
    icon: Zap,
    title: "Exercise Prescription & Prevention",
    description: "Get exercises and preventative care strategies to support your recovery and wellness."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            ADAPTIVE CARE DESIGNED FOR YOU
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience chiropractic care that adapts to your lifestyle, not the other way around.
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
