import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import doctorPhoto1 from "@/assets/images/doctor-photo-1.jpg";

interface HeroProps {
  heroImage?: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  const bgImage = heroImage || doctorPhoto1;
  
  return (
    <section 
      id="main-content"
      className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
        role="img"
        aria-label="Dr. Phil providing chiropractic care"
      />
      
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 md:mb-6 animate-fade-in">
            Adaptive Mobile Chiropractic
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            I come to your home or office so you can get better faster without the hassle
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a 
              href="http://drphilmobilechiro.janeapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 gap-2"
              >
                Schedule Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
