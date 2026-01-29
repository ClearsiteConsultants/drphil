import { Clock, Fingerprint, Activity } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Convenience & Longer Appointment Times",
      description: "Let's be honest, life is busy, real busy. Imagine not having to deal with getting the whole family bundled up and into the car or to take time off of work to fight with traffic, all to find yourself waiting in a lobby for just moments of time with your doctor. Dr. Phil will bring everything professionally necessary to your home, conduct regular treatments and checkups on your family, giving you more time to do the important things you need to do throughout your day. This special convenience of house calls provides you the ability to get better without the hassle."
    },
    {
      icon: Fingerprint,
      title: "Personalized & Gentle Treatment",
      description: "We all have stress in our lives. Dr. Phil will work with you and evaluate your health, body and spine to find out how stress is affecting your ability to be the healthiest person you can be. Everyone is different. Every body is different. Your treatment will be adapted to your lifestyle so that it will benefit you the most with the best possible outcomes."
    },
    {
      icon: Activity,
      title: "Exercise Prescription",
      description: "As treatment progresses, assessments will be performed by Dr. Phil to prescribe specific exercises and stretches based on your individual needs."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <h2 id="features-heading" className="sr-only">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
