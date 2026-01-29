import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from '@/pages/Index';
import About from '@/pages/About';
import WhyHouseCalls from '@/pages/WhyHouseCalls';

describe('SEO & Meta Tags - F014', () => {
  describe('AC014-1: Homepage title', () => {
    it('T014-1: Homepage has correct title', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const title = document.querySelector('title');
        expect(title?.textContent).toBe('Adaptive Mobile Chiropractic - Dr. Phil Wilkins DC ATC CNIM');
      });
    });
  });

  describe('AC014-2: Homepage meta description', () => {
    it('T014-2: Homepage has comprehensive meta description with key services and cities', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const metaDescription = document.querySelector('meta[name="description"]');
        const content = metaDescription?.getAttribute('content') || '';
        
        expect(content).toContain('Salt Lake City');
        expect(content).toContain('Provo');
        expect(content).toContain('Park City');
        expect(content.length).toBeGreaterThan(50);
      });
    });
  });

  describe('AC014-3: About page has unique title and description', () => {
    it('About page has unique SEO meta tags', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <About />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const title = document.querySelector('title');
        const metaDescription = document.querySelector('meta[name="description"]');
        
        expect(title?.textContent).toContain('About Dr. Phil Wilkins');
        expect(metaDescription?.getAttribute('content')).toContain('Dr. Phil Wilkins');
      });
    });
  });

  describe('AC014-4: Why House Calls page has unique title and description', () => {
    it('Why House Calls page has unique SEO meta tags', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <WhyHouseCalls />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const title = document.querySelector('title');
        const metaDescription = document.querySelector('meta[name="description"]');
        
        expect(title?.textContent).toContain('Why House Calls');
        expect(metaDescription?.getAttribute('content')).toContain('mobile chiropractic');
      });
    });
  });

  describe('AC014-5: Open Graph tags present on all pages', () => {
    it('T014-3: Homepage has all required Open Graph tags', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        const ogType = document.querySelector('meta[property="og:type"]');
        
        expect(ogTitle?.getAttribute('content')).toBeTruthy();
        expect(ogDescription?.getAttribute('content')).toBeTruthy();
        expect(ogImage?.getAttribute('content')).toBeTruthy();
        expect(ogUrl?.getAttribute('content')).toBeTruthy();
        expect(ogType?.getAttribute('content')).toBeTruthy();
      });
    });

    it('About page has all required Open Graph tags', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <About />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        const ogType = document.querySelector('meta[property="og:type"]');
        
        expect(ogTitle?.getAttribute('content')).toBeTruthy();
        expect(ogDescription?.getAttribute('content')).toBeTruthy();
        expect(ogImage?.getAttribute('content')).toBeTruthy();
        expect(ogUrl?.getAttribute('content')).toBeTruthy();
        expect(ogType?.getAttribute('content')).toBeTruthy();
      });
    });
  });

  describe('AC014-6: Twitter Card tags configured', () => {
    it('T014-4: Homepage has Twitter Card tags', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const twitterCard = document.querySelector('meta[name="twitter:card"]');
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        const twitterImage = document.querySelector('meta[name="twitter:image"]');
        
        expect(twitterCard?.getAttribute('content')).toBe('summary_large_image');
        expect(twitterTitle?.getAttribute('content')).toBeTruthy();
        expect(twitterDescription?.getAttribute('content')).toBeTruthy();
        expect(twitterImage?.getAttribute('content')).toBeTruthy();
      });
    });
  });

  describe('AC014-7: Canonical URLs set for all pages', () => {
    it('Homepage has canonical URL', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const canonical = document.querySelector('link[rel="canonical"]');
        expect(canonical?.getAttribute('href')).toContain('drphilmobilechiro.com');
      });
    });

    it('About page has canonical URL', async () => {
      // Need to use MemoryRouter with initialEntries to simulate the /about route
      const { MemoryRouter } = await import('react-router-dom');
      render(
        <HelmetProvider>
          <MemoryRouter initialEntries={['/about']}>
            <About />
          </MemoryRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const canonical = document.querySelector('link[rel="canonical"]');
        const href = canonical?.getAttribute('href') || '';
        expect(href).toContain('/about');
      });
    });
  });

  describe('AC014-9: Schema.org structured data for LocalBusiness and MedicalBusiness', () => {
    it('T014-5: Homepage has LocalBusiness and MedicalBusiness schema', async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </HelmetProvider>
      );

      await waitFor(() => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        expect(scripts.length).toBeGreaterThan(0);
        
        const schemaScript = Array.from(scripts).find(script => {
          const content = script.textContent || '';
          return content.includes('LocalBusiness') && content.includes('MedicalBusiness');
        });
        
        expect(schemaScript).toBeTruthy();
        
        if (schemaScript) {
          const schemaData = JSON.parse(schemaScript.textContent || '{}');
          expect(schemaData['@type']).toContain('LocalBusiness');
          expect(schemaData['@type']).toContain('MedicalBusiness');
          expect(schemaData.name).toBeTruthy();
          expect(schemaData.address).toBeTruthy();
          expect(schemaData.areaServed).toBeTruthy();
          expect(schemaData.physician).toBeTruthy();
        }
      });
    });
  });
});
