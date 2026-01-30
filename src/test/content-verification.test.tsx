import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import ServiceArea from '@/components/ServiceArea';
import Contact from '@/components/Contact';

describe('Content Verification Tests (TS002)', () => {
  describe('CV001: Hero heading matches Adaptive Mobile Chiropractic', () => {
    it('should display the correct hero heading', () => {
      render(<Hero />);
      expect(screen.getByText('Adaptive Mobile Chiropractic')).toBeInTheDocument();
    });
  });

  describe('CV002: All 4 testimonials present with correct names', () => {
    it('should display all 4 testimonials with correct names', () => {
      render(<Testimonials />);
      expect(screen.getByText('Melissa M.')).toBeInTheDocument();
      expect(screen.getByText('Ashlee E.')).toBeInTheDocument();
      expect(screen.getByText('Kolt E.')).toBeInTheDocument();
      expect(screen.getByText('Crystal P.')).toBeInTheDocument();
    });
  });

  describe('CV003: All 3 pricing tiers show correct amounts', () => {
    it('should display all 3 pricing tiers with correct amounts', () => {
      render(<Pricing />);
      expect(screen.getByText('$125')).toBeInTheDocument();
      expect(screen.getByText('$75')).toBeInTheDocument();
      expect(screen.getByText('$50')).toBeInTheDocument();
    });
  });

  describe('CV004: Service area lists all 11 cities', () => {
    it('should display all 11 cities', () => {
      render(<ServiceArea />);
      const cities = [
        'Alpine',
        'American Fork',
        'Cedar Hills',
        'Highland',
        'Lehi',
        'Orem',
        'Provo',
        'Pleasant Grove',
        'Lindon',
        'Saratoga Springs',
        'Eagle Mountain'
      ];
      
      cities.forEach(city => {
        expect(screen.getByText(city)).toBeInTheDocument();
      });
    });
  });

  describe('CV005: Contact info correct: 801-369-3122, doctorphilchiro@gmail.com', () => {
    it('should display correct phone number', () => {
      render(<Contact />);
      // Check for phone number (may be formatted with parentheses)
      const phoneText = screen.getByText(/801.*369.*3122/);
      expect(phoneText).toBeInTheDocument();
    });

    it('should display correct email', () => {
      render(<Contact />);
      expect(screen.getByText('doctorphilchiro@gmail.com')).toBeInTheDocument();
    });
  });
});
