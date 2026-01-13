import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "7947 N Copperbend Rd, Eagle Mountain, UT"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567"
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@emotorepair.com"
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri 8am-6pm, Sat 9am-4pm"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            READY TO RIDE?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drop us a line and we'll get back to you within 24 hours. Or just stop by – we love talking bikes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl gradient-card border border-border">
            <h3 className="font-display text-2xl text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <Input placeholder="Your name" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Bike Model</label>
                <Input placeholder="e.g., Sur-Ron Light Bee X" className="bg-background/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your repair needs..."
                  rows={4}
                  className="bg-background/50"
                />
              </div>
              <Button variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-lg text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 h-64 rounded-xl bg-secondary border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
