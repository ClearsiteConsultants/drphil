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
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Adaptive Mobile Chiropractic - Dr. Phil Wilkins DC ATC CNIM"
        description="Professional mobile chiropractic services in Salt Lake City, Provo, Park City, Ogden, and Orem, Utah. Expert chiropractic care, sports medicine, and neurophysiology services delivered to your home or office. Same-day appointments available."
      />
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
      <Footer />
    </div>
  );
};

export default Index;
