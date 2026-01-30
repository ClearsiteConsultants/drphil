/**
 * Image asset paths and metadata
 * All images are organized in src/assets/images/
 */

// Logo images
import logoWhite from '../assets/images/logo_simple-768x207.png';
// import logoSimple from '../assets/images/logo-simple.jpg';
import logoSimple from '../assets/images/logo_white.png';
// import logoWhite from '../assets/images/logo-white.jpg';

// Service map
import serviceMap from '../assets/images/service-map.jpg';

// Doctor photos
import doctorPhoto1 from '../assets/images/doctor-photo-1.jpg';
import doctorPhoto2 from '../assets/images/doctor-photo-2.jpg';
import doctorPhoto3 from '../assets/images/doctor-photo-3.jpg';

// Hero image
import heroImage from '../assets/images/DSC_0453-scaled.jpg';

// Additional hero/background images
import heroImage2 from '../assets/images/DSC_0141-scaled.jpg';
import heroImage3 from '../assets/images/K1S_6976-scaled.jpg';
import heroImage4 from '../assets/images/Photo-Jan-09-7-42-10-PM-scaled.jpg';

export const IMAGES = {
  // Logos
  logoSimple: {
    src: logoSimple,
    alt: 'Adaptive Mobile Chiropractic - Dr. Phil Mobile Chiropractic Logo',
  },
  logoWhite: {
    src: logoWhite,
    alt: 'Adaptive Mobile Chiropractic - White Logo',
  },

  // Service area map
  serviceMap: {
    src: serviceMap,
    alt: 'Dr. Phil Mobile Chiropractic Service Area Map - Coverage across metro area',
  },

  // Hero image
  heroImage: {
    src: heroImage,
    alt: 'Dr. Phil Wilkins - Mobile Chiropractic Care',
  },

  // Additional hero/background images
  heroImage2: {
    src: heroImage2,
    alt: 'Professional chiropractic treatment environment',
  },
  heroImage3: {
    src: heroImage3,
    alt: 'Mobile chiropractic care setting',
  },
  heroImage4: {
    src: heroImage4,
    alt: 'Quality chiropractic care in comfortable surroundings',
  },

  // Doctor and office photos
  doctorPhoto1: {
    src: doctorPhoto1,
    alt: 'Dr. Phil providing mobile chiropractic care',
  },
  doctorPhoto2: {
    src: doctorPhoto2,
    alt: 'Dr. Phil mobile chiropractic treatment session',
  },
  doctorPhoto3: {
    src: doctorPhoto3,
    alt: 'Professional chiropractic care in your home',
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
