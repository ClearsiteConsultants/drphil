import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IMAGES } from "@/constants/images";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const carouselImages = [
    { src: IMAGES.doctorPhoto1.src, alt: "Dr. Phil Wilkins providing chiropractic treatment" },
    { src: IMAGES.doctorPhoto2.src, alt: "Dr. Phil Wilkins treatment session" },
    { src: IMAGES.doctorPhoto3.src, alt: "Dr. Phil Wilkins professional care" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Dr. Phil Wilkins DC ATC CNIM - Mobile Chiropractor Utah"
        description="Meet Dr. Phil Wilkins, a certified chiropractor with 25 years of experience in sports medicine, chiropractic medicine, and neurophysiology. Serving Salt Lake City, Provo, and Park City with mobile chiropractic care."
      />
      <Header />
      {/* Hero Section with Background */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.doctorPhoto1.src})` }}
        role="img"
        aria-label="Dr. Phil Wilkins providing professional chiropractic care"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Dr. Phil Wilkins</h1>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>I have always loved being active and participated in sports throughout my life.</p>
              <p>My journey in healthcare began when I severely injured my ankle and had to have surgery to repair ligament and tendon damage. Starting rehab for my ankle I knew I wanted to help people overcome their injuries and become healthier.</p>
              <p>I found through that experience that I loved the human body and how it worked and had a real knack for it. This led to me earning a Bachelor of Science degree in Sports Medicine, and becoming a certified Athletic Trainer. After working as a trainer for a while, I decided to further my education by studying Chiropractic Medicine.</p>
              <p>I again furthered my understanding of the human body and its working as a Neurophysiologist. Unlike most other physicians, I have 25 years of experience with sports, chiropractic medicine, and in the operating room.</p>
              <p>I understand the role chiropractic has in helping people, but I understand the role of surgery as well, and work with orthopedic and neuro surgeons in helping patients receive the best possible care for their injury. My unique background makes me qualified to help others recover from injury and establish a healthy lifestyle.</p>
              <p>I understand that no two injuries are exactly the same, and that every individual requires a treatment designed specifically to their circumstances so that they might feel at their optimal best.</p>
            </div>
            <Button 
              className="mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              asChild
            >
              <a 
                href="http://drphilmobilechiro.janeapp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="py-16 bg-muted/30" aria-label="Photo gallery">
        <div className="container">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
            aria-label="Dr. Phil Wilkins photo gallery"
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
