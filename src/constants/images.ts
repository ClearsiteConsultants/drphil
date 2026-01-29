/**
 * Image asset paths and metadata
 * All images are organized in src/assets/images/
 */

// Logo images
import logoSimple from '../assets/images/logo-simple.jpg';
import logoWhite from '../assets/images/logo-white.jpg';

// Service map
import serviceMap from '../assets/images/service-map.jpg';

// Doctor photos
import doctorPhoto1 from '../assets/images/doctor-photo-1.jpg';
import doctorPhoto2 from '../assets/images/doctor-photo-2.jpg';
import doctorPhoto3 from '../assets/images/doctor-photo-3.jpg';

// Hero image
import heroImage from '../assets/images/DSC_0453-scaled.jpg';

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
