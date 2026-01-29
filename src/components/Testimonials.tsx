import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Melissa M.",
    text: "I had tweaked my lower back and could barely walk. It was extremely painful and I couldn't stretch it out on my own. Phil (Dr. Wilkins) was able to adjust my lower back and get me walking again with no pain with only a couple of treatments. I would highly recommend him!",
  },
  {
    id: 2,
    name: "Ashlee E.",
    text: "I have been going to Phil for years in which he has helped me with knee, neck, and back injuries and pain. He is always thorough and makes sure that he has helped relieve your pain and at the exact area that is being affected before he is done. He never tells you just how many times you need to see him before you're better, but always says, \"I'm here if you're still hurting\", which is so different from other chiropractors I've been to. I can't recommend Phil enough.",
  },
  {
    id: 3,
    name: "Kolt E.",
    text: "Dr. Phil has worked miracles for my family several times! I was so impressed that a Chiropractor would come to my house and adjust my back after suffering an injury from playing basketball. He is very professional and  takes the time to educate and make sure you are feeling better right away.",
  },
  {
    id: 4,
    name: "Crystal P.",
    text: "I would highly recommend Phil for chiropractic needs! He is so knowledgeable with his background in the medical field. He has helped me out so much with my athletic injuries and also my SI joint fusion. Phil is amazing and your guy!!!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          What People Are Saying About Dr. Phil
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[300px]">
                      <p className="text-muted-foreground text-center mb-6 flex-grow flex items-center">
                        "{testimonial.text}"
                      </p>
                      <cite className="text-primary font-semibold text-lg not-italic">
                        {testimonial.name}
                      </cite>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
