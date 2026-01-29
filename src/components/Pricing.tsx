import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Plane, Shield, Flame, Users } from "lucide-react";

const pricingTiers = [
  {
    title: "Getting Started",
    price: "$125",
    description: "Initial Visit & Treatment",
    duration: "Typically 45-60 Minutes"
  },
  {
    title: "Follow Up Treatment",
    price: "$75",
    description: "Chiropractic Treatment, Stretching, Massage",
    duration: "Typically 30 Minutes"
  },
  {
    title: "Adjustment Only",
    price: "$50",
    description: "",
    duration: "Typically 15 Minutes."
  }
];

const discountCategories = [
  { icon: GraduationCap, label: "Educators" },
  { icon: Plane, label: "Military" },
  { icon: Shield, label: "Law Enforcement" },
  { icon: Flame, label: "Firefighters" },
  { icon: Users, label: "Multiple Family Members Treated At The Same Visit" }
];

const Pricing = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">{tier.title}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">
                  {tier.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {tier.description && (
                  <p className="text-muted-foreground mb-2">{tier.description}</p>
                )}
                <p className="text-sm text-muted-foreground">{tier.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Discount Section */}
        <div className="bg-muted rounded-lg p-8">
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-center mb-8">
            Discount Rates Are Available For:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {discountCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{category.label}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              asChild
              className="font-semibold"
            >
              <a 
                href="http://drphilmobilechiro.janeapp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
