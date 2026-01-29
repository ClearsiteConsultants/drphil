import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import WhatToExpect from "@/components/WhatToExpect";
import DoctorProfile from "@/components/DoctorProfile";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <div id="services">
        <Services />
      </div>
      <ServiceArea />
      <WhatToExpect />
      <div id="about">
        <DoctorProfile />
      </div>
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
