import { IMAGES } from "@/constants/images";

const cities = [
  "Alpine",
  "American Fork",
  "Cedar Hills",
  "Highland",
  "Lehi",
  "Orem",
  "Provo",
  "Pleasant Grove",
  "Lindon",
  "Saratoga Springs",
  "Eagle Mountain",
];

export default function ServiceArea() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Service Area
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a
              href="https://www.google.com/maps/place/Adaptive+Mobile+Chiropractic/@40.3195104,-112.0409596,10z/data=!4m5!3m4!1s0x0:0x360237e45cd12170!8m2!3d40.339925!4d-111.799947"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <img
                src={IMAGES.serviceMap.src}
                alt={IMAGES.serviceMap.alt}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </a>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-heading font-semibold mb-4 text-center">
              Cities We Serve
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {cities.map((city) => (
                <li
                  key={city}
                  className="text-left flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
