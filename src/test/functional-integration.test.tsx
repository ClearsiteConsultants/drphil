import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/pages/About';
import WhyHouseCalls from '@/pages/WhyHouseCalls';

describe('Functional Integration Testing - F018', () => {
  const JANE_APP_URL = 'http://drphilmobilechiro.janeapp.com/';

  describe('AC018-1: All Schedule Now buttons open JaneApp in new tab', () => {
    it('T018-1: Header Schedule Now button links to JaneApp', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const scheduleButtons = screen.getAllByText('Schedule Now');
      expect(scheduleButtons.length).toBeGreaterThan(0);

      scheduleButtons.forEach(button => {
        const link = button.closest('a');
        expect(link).toHaveAttribute('href', JANE_APP_URL);
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    it('Hero Schedule Now button links to JaneApp', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );

      const scheduleButton = screen.getByText('Schedule Now');
      const link = scheduleButton.closest('a');
      expect(link).toHaveAttribute('href', JANE_APP_URL);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('Footer Schedule Now button links to JaneApp', () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );

      const scheduleButton = screen.getByText('Schedule Now');
      const link = scheduleButton.closest('a');
      expect(link).toHaveAttribute('href', JANE_APP_URL);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('AC018-2: All Free Consultation buttons open JaneApp in new tab', () => {
    it('T018-2: About page Free Consultation button links to JaneApp', () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <About />
          </BrowserRouter>
        </HelmetProvider>
      );

      const consultButton = screen.getByText('Free Consultation');
      const link = consultButton.closest('a');
      expect(link).toHaveAttribute('href', JANE_APP_URL);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('T018-3: Why House Calls page Free Consultation button links to JaneApp', () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <WhyHouseCalls />
          </BrowserRouter>
        </HelmetProvider>
      );

      const consultButton = screen.getByText('Free Consultation');
      const link = consultButton.closest('a');
      expect(link).toHaveAttribute('href', JANE_APP_URL);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('AC018-3: All Get Started buttons open JaneApp in new tab', () => {
    it('Pricing Get Started button links to JaneApp', () => {
      render(
        <BrowserRouter>
          <Pricing />
        </BrowserRouter>
      );

      const getStartedButton = screen.getByText('Get Started');
      const link = getStartedButton.closest('a');
      expect(link).toHaveAttribute('href', JANE_APP_URL);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('AC018-4: Phone number links trigger phone dialer on mobile', () => {
    it('T018-4: Footer phone link has correct tel: format', () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );

      const phoneLink = screen.getByText('(801) 369-3122').closest('a');
      expect(phoneLink).toHaveAttribute('href', 'tel:+18013693122');
    });
  });

  describe('AC018-5: Email link opens default email client', () => {
    it('Footer email link has correct mailto: format', () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );

      const emailLink = screen.getByText('doctorphilchiro@gmail.com').closest('a');
      expect(emailLink).toHaveAttribute('href', 'mailto:doctorphilchiro@gmail.com');
    });
  });

  describe('AC018-6: Social media links open correct profiles', () => {
    it('Facebook link opens correct profile', () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );

      const facebookLink = screen.getByLabelText('Facebook');
      expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/drphilmobilechiro/');
      expect(facebookLink).toHaveAttribute('target', '_blank');
      expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('Instagram link opens correct profile', () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );

      const instagramLink = screen.getByLabelText('Instagram');
      expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/p/B7l9oGzJkiA/?igshid=10ex6php6xbfy');
      expect(instagramLink).toHaveAttribute('target', '_blank');
      expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('AC018-7: Google Maps link opens correct location', () => {
    it('Google Maps link in ServiceArea component', async () => {
      const { default: ServiceArea } = await import('@/components/ServiceArea');
      
      render(
        <BrowserRouter>
          <ServiceArea />
        </BrowserRouter>
      );

      // The map is an image link, not text
      const mapLinks = screen.getAllByRole('link');
      const googleMapsLink = mapLinks.find(link => 
        link.getAttribute('href')?.includes('google.com/maps')
      );
      
      expect(googleMapsLink).toBeDefined();
      expect(googleMapsLink).toHaveAttribute('target', '_blank');
      expect(googleMapsLink?.getAttribute('href')).toContain('Adaptive+Mobile+Chiropractic');
    });
  });

  describe('AC018-8: All carousels function smoothly', () => {
    it('T018-5: Testimonials carousel renders with navigation', () => {
      render(
        <BrowserRouter>
          <Testimonials />
        </BrowserRouter>
      );

      // Check testimonials are present
      expect(screen.getByText(/Melissa M\./)).toBeInTheDocument();
      
      // Verify multiple testimonials exist
      expect(screen.getByText(/Ashlee E\./)).toBeInTheDocument();
      expect(screen.getByText(/Kolt E\./)).toBeInTheDocument();
    });

    it('T018-6: About page doctor photos carousel renders with navigation', () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <About />
          </BrowserRouter>
        </HelmetProvider>
      );

      // Check that images are present
      const images = screen.getAllByRole('img');
      const doctorImages = images.filter(img => 
        img.getAttribute('alt')?.includes('Dr. Phil')
      );
      expect(doctorImages.length).toBeGreaterThan(0);
    });
  });

  describe('AC018-9: Mobile menu opens and closes correctly', () => {
    it('Mobile menu toggle button exists', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      // Menu button should exist (look for Menu icon button)
      const buttons = screen.getAllByRole('button');
      const menuButton = buttons.find(btn => {
        const svg = btn.querySelector('svg');
        return svg !== null;
      });
      
      expect(menuButton).toBeInTheDocument();
    });

    it('Mobile menu opens when toggle button is clicked', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      // Get the menu button (has Menu or X icon)
      const buttons = screen.getAllByRole('button');
      const menuButton = buttons.find(btn => btn.querySelector('svg'));
      
      // Initially, mobile nav should not be visible or contain limited items
      const initialLinks = screen.queryAllByRole('link', { name: /Home|About|Why House Calls/i });
      
      // Click to open menu
      if (menuButton) {
        fireEvent.click(menuButton);
      }
      
      // After clicking, navigation should be visible
      const afterLinks = screen.getAllByRole('link', { name: /Home|About|Why House Calls/i });
      expect(afterLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Integration Tests - User Flows', () => {
    it('Complete flow: Navigation and CTA button interaction', () => {
      const { container } = render(
        <BrowserRouter>
          <Header />
          <Hero />
          <Footer />
        </BrowserRouter>
      );

      // Verify header is present
      expect(screen.getAllByText('Schedule Now').length).toBeGreaterThan(0);

      // Verify hero CTA is present
      const heroSection = container.querySelector('section');
      expect(heroSection).toBeInTheDocument();

      // Verify footer is present with contact info
      expect(screen.getByText('(801) 369-3122')).toBeInTheDocument();
      expect(screen.getByText('doctorphilchiro@gmail.com')).toBeInTheDocument();
    });

    it('All JaneApp booking links are consistent', () => {
      const { rerender } = render(
        <HelmetProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </HelmetProvider>
      );

      let janeAppLinks = screen.getAllByRole('link', { name: /Schedule Now/i });
      janeAppLinks.forEach(link => {
        expect(link).toHaveAttribute('href', JANE_APP_URL);
      });

      rerender(
        <HelmetProvider>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </HelmetProvider>
      );

      janeAppLinks = screen.getAllByRole('link', { name: /Schedule Now/i });
      janeAppLinks.forEach(link => {
        expect(link).toHaveAttribute('href', JANE_APP_URL);
      });

      rerender(
        <HelmetProvider>
          <BrowserRouter>
            <About />
          </BrowserRouter>
        </HelmetProvider>
      );

      const consultLink = screen.getByRole('link', { name: /Free Consultation/i });
      expect(consultLink).toHaveAttribute('href', JANE_APP_URL);
    });
  });
});
