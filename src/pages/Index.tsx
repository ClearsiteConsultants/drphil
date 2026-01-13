import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import heroBike from "@/assets/hero-bike.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero heroImage={heroBike} />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
