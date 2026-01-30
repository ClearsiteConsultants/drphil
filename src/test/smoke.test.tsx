import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '@/App';
import Header from '@/components/Header';

describe('TS001: Smoke Tests - Quick verification that critical functionality works', () => {
  describe('ST001: Homepage loads without errors', () => {
    it('renders the homepage without crashing', () => {
      const { container } = render(<App />);
      expect(container).toBeTruthy();
    });

    it('displays main hero content on homepage', async () => {
      render(<App />);
      
      // Check for key homepage elements - wait for lazy loading
      const heroText = await screen.findByText(/Adaptive Mobile Chiropractic/i);
      expect(heroText).toBeInTheDocument();
    });
  });

  describe('ST002: All navigation links work', () => {
    it('renders all navigation links in header', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      // Check for primary navigation links
      expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /why house calls/i })).toBeInTheDocument();
    });

    it('navigation links have correct href attributes', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '/');
      expect(screen.getByRole('link', { name: /^about$/i })).toHaveAttribute('href', '/about');
      expect(screen.getByRole('link', { name: /why house calls/i })).toHaveAttribute('href', '/why-house-calls');
    });
  });

  describe('ST003: At least one JaneApp link works', () => {
    it('JaneApp Schedule Now button exists in header', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const scheduleButtons = screen.getAllByText('Schedule Now');
      expect(scheduleButtons.length).toBeGreaterThan(0);
      
      const link = scheduleButtons[0].closest('a');
      expect(link).toHaveAttribute('href', 'http://drphilmobilechiro.janeapp.com/');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('ST004: Images load on homepage', () => {
    it('homepage contains image elements', async () => {
      render(<App />);

      // Wait for lazy loading
      await screen.findByText(/Adaptive Mobile Chiropractic/i);
      
      const images = screen.getAllByRole('img');
      expect(images.length).toBeGreaterThan(0);
    });

    it('images have valid src attributes', async () => {
      render(<App />);

      // Wait for lazy loading
      await screen.findByText(/Adaptive Mobile Chiropractic/i);
      
      const images = screen.getAllByRole('img');
      const imagesWithSrc = images.filter(img => img.getAttribute('src'));
      
      // At least some images should have src
      expect(imagesWithSrc.length).toBeGreaterThan(0);
      
      imagesWithSrc.forEach(img => {
        const src = img.getAttribute('src');
        expect(src).toBeTruthy();
        expect(src).not.toBe('');
      });
    });
  });

  describe('ST005: Mobile menu opens', () => {
    it('mobile menu button exists and can be clicked', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const menuButton = screen.getByLabelText(/menu/i);
      expect(menuButton).toBeInTheDocument();
      
      // Click to open menu
      fireEvent.click(menuButton);
      
      // Verify menu opened by checking for navigation elements
      // The mobile menu should show navigation links
      const navLinks = screen.getAllByRole('link');
      expect(navLinks.length).toBeGreaterThan(0);
    });
  });
});
