import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SEO = ({ 
  title, 
  description, 
  image = '/placeholder.svg',
  type = 'website' 
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = 'https://drphilmobilechiro.com';
  const currentUrl = `${baseUrl}${location.pathname}`;

  // Default values
  const defaultTitle = 'Adaptive Mobile Chiropractic - Dr. Phil Wilkins DC ATC CNIM';
  const defaultDescription = 'Professional mobile chiropractic services in Salt Lake City, Provo, Park City, and throughout Utah. Dr. Phil Wilkins provides expert care at your home or office with same-day appointments.';
  
  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Structured data for LocalBusiness and MedicalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "name": "Adaptive Mobile Chiropractic",
    "image": seoImage,
    "description": seoDescription,
    "url": baseUrl,
    "telephone": "+1-801-XXX-XXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salt Lake City",
      "addressRegion": "UT",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Salt Lake City"
      },
      {
        "@type": "City",
        "name": "Provo"
      },
      {
        "@type": "City",
        "name": "Park City"
      },
      {
        "@type": "City",
        "name": "Ogden"
      },
      {
        "@type": "City",
        "name": "Orem"
      }
    ],
    "serviceType": "Mobile Chiropractic Care",
    "medicalSpecialty": "Chiropractic",
    "physician": {
      "@type": "Physician",
      "name": "Dr. Phil Wilkins",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "DC ATC CNIM",
      "jobTitle": "Chiropractor",
      "description": "Certified chiropractor with 25 years of experience in sports medicine, chiropractic medicine, and neurophysiology"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Adaptive Mobile Chiropractic" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
