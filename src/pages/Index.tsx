import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatToExpect from "@/components/WhatToExpect";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import heroBike from "@/assets/hero-bike.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero heroImage={heroBike} />
      <Services />
      <WhatToExpect />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
