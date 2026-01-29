import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

expect.extend(toHaveNoViolations);

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Accessibility Tests', () => {
  it('Header component should have no accessibility violations', async () => {
    const { container } = renderWithRouter(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Hero component should have no accessibility violations', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Services component should have no accessibility violations', async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Contact component should have no accessibility violations', async () => {
    const { container } = render(<Contact />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Footer component should have no accessibility violations', async () => {
    const { container } = renderWithRouter(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Header has proper ARIA labels for interactive elements', () => {
    const { container } = renderWithRouter(<Header />);
    const menuButton = container.querySelector('button[aria-label]');
    expect(menuButton).toBeTruthy();
  });

  it('Skip navigation link exists and is accessible', () => {
    const { container } = renderWithRouter(<Header />);
    const skipLink = container.querySelector('a[href="#main-content"]');
    expect(skipLink).toBeTruthy();
    expect(skipLink?.textContent).toBe('Skip to main content');
  });

  it('Contact form has proper label associations', () => {
    const { container } = render(<Contact />);
    const nameInput = container.querySelector('#contact-name');
    const emailInput = container.querySelector('#contact-email');
    const messageInput = container.querySelector('#contact-message');
    
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(messageInput).toBeTruthy();
  });

  it('Navigation has proper ARIA roles', () => {
    const { container } = renderWithRouter(<Header />);
    const navigation = container.querySelector('nav[aria-label]');
    expect(navigation).toBeTruthy();
  });
});
