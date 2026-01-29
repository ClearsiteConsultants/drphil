import { IMAGES } from "@/constants/images";

const DoctorProfile = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            Meet the Doctor
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-secondary mb-6">
              Dr. Phil Wilkins DC ATC CNIM
            </h3>
            <div className="text-gray-700 space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                I have always loved being active and participated in sports throughout my life. My journey in healthcare began when I severely injured my ankle and had to have surgery to repair ligament and tendon damage. Starting rehab for my ankle I knew I wanted to help people overcome their injuries and become healthier. I found through that experience that I loved the human body and how it worked and had a real knack for it. This led to me earning a Bachelor of Science degree in Sports Medicine, and becoming a certified Athletic Trainer.  After working as a trainer for a while, I decided to further my education by studying Chiropractic Medicine.  I again furthered my understanding of the human body and its working as a Neurophysiologist.  Unlike most other physicians, I have 25 years of experience with sports, chiropractic medicine, and in the operating room.  I understand the role chiropractic has in helping people, but I understand the role of surgery as well, and work with orthopedic and neuro surgeons in helping patients receive the best possible care for their injury. My unique background makes me qualified to help others recover from injury and establish a healthy lifestyle.  I understand that no two injuries are exactly the same, and that every individual requires a treatment designed specifically to their circumstances so that they might feel at their optimal best.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={IMAGES.doctorPhoto1.src} 
                alt={IMAGES.doctorPhoto1.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
