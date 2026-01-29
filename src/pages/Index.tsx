import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import WhatToExpect from "@/components/WhatToExpect";
import DoctorProfile from "@/components/DoctorProfile";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Services />
      <ServiceArea />
      <WhatToExpect />
      <DoctorProfile />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
