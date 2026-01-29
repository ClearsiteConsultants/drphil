import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import doctorPhoto1 from "@/assets/images/doctor-photo-1.jpg";

const WhyHouseCalls = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${doctorPhoto1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Why House Calls
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              If you are looking for a level of convenience that you've never experienced, then House Calls is your answer. As a House Call Chiropractic Physician, I come to you. This means that you continue relaxing in the comfort of your own home or office while receiving quality care. There is no need to be inconvenienced by packing up the family, taking time off of work, driving and dealing with traffic, and sitting in waiting rooms. Why waste your precious valuable time when you could be doing the things you'd rather be doing?
            </p>
            
            <p>
              In a conventional office setting, it's not uncommon or unusual to sit in a waiting room for 20+ minutes, finally to be escorted to a treatment room where you once again wait for the doctor, who then ends up spending 5 minutes with you. You will receive more services and your care will be personalized to you so you can feel better faster. Dr. Phil is able to assess you on a deeper level in your home, so instead of treating your symptoms, He treats you as a whole.
            </p>
            
            <p>
              Most people don't have time to go to the doctor and appointment times are difficult to manage. That's why House Calls are the solution. Let Chiropractic treatment come to you so you can feel better faster without the hassle.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a 
              href="http://drphilmobilechiro.janeapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhyHouseCalls;
