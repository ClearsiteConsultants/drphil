import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../hooks/useTheme';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { MemoryRouter } from 'react-router-dom';

// Test component to access theme context
const ThemeTestComponent = () => {
  const { currentTheme, theme } = useTheme();
  return (
    <div>
      <div data-testid="current-theme">{currentTheme}</div>
      <div data-testid="primary-color">{theme.colors.primary}</div>
    </div>
  );
};

describe('Theme System - F025', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('AC025-1: Theme selector button properly switches between theme variants', () => {
    it('T025-1: Click theme selector and verify page appearance changes', async () => {
      render(
        <MemoryRouter>
          <ThemeProvider>
            <ThemeTestComponent />
            <ThemeSwitcher />
          </ThemeProvider>
        </MemoryRouter>
      );

      // Verify default theme
      expect(screen.getByTestId('current-theme')).toHaveTextContent('modern-minimal');
      expect(screen.getByTestId('primary-color')).toHaveTextContent('#000000');

      // Open theme switcher
      const paletteButton = screen.getByLabelText('Theme Switcher');
      fireEvent.click(paletteButton);

      // Wait for modal to appear
      await waitFor(() => {
        expect(screen.getByText('Choose a Theme')).toBeInTheDocument();
      });

      // Click on "Professional Medical" theme
      const professionalTheme = screen.getByText('Professional Medical');
      fireEvent.click(professionalTheme);

      // Verify theme changed
      await waitFor(() => {
        expect(screen.getByTestId('current-theme')).toHaveTextContent('professional-medical');
        expect(screen.getByTestId('primary-color')).toHaveTextContent('#1E40AF');
      });
    });
  });

  describe('AC025-2: Page colors and styling update when theme is changed', () => {
    it('should update CSS custom properties when theme changes', async () => {
      render(
        <MemoryRouter>
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
        </MemoryRouter>
      );

      // Open theme switcher
      const paletteButton = screen.getByLabelText('Theme Switcher');
      fireEvent.click(paletteButton);

      // Wait for modal
      await waitFor(() => {
        expect(screen.getByText('Choose a Theme')).toBeInTheDocument();
      });

      // Select "Warm & Approachable" theme
      const warmTheme = screen.getByText('Warm & Approachable');
      fireEvent.click(warmTheme);

      // Check that CSS variables are updated
      await waitFor(() => {
        const root = document.documentElement;
        const primaryColor = root.style.getPropertyValue('--color-primary');
        expect(primaryColor).toBe('#92400E');
        
        // Check that Tailwind HSL variables are also set
        const primaryHSL = root.style.getPropertyValue('--primary');
        expect(primaryHSL).toBeTruthy();
        expect(primaryHSL).toContain('%'); // HSL format check
      });
    });
  });

  describe('AC025-3: Theme preference is saved and persists across page navigation', () => {
    it('T025-2 & T025-3: Theme persists in localStorage', async () => {
      const { unmount } = render(
        <MemoryRouter>
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
        </MemoryRouter>
      );

      // Open theme switcher and select theme
      const paletteButton = screen.getByLabelText('Theme Switcher');
      fireEvent.click(paletteButton);

      await waitFor(() => {
        expect(screen.getByText('Choose a Theme')).toBeInTheDocument();
      });

      const professionalTheme = screen.getByText('Professional Medical');
      fireEvent.click(professionalTheme);

      // Verify localStorage is updated
      await waitFor(() => {
        expect(localStorage.getItem('theme-variant')).toBe('professional-medical');
      });

      // Unmount and remount to simulate page refresh
      unmount();

      render(
        <MemoryRouter>
          <ThemeProvider>
            <ThemeTestComponent />
          </ThemeProvider>
        </MemoryRouter>
      );

      // Verify theme persists after remount
      expect(screen.getByTestId('current-theme')).toHaveTextContent('professional-medical');
    });
  });

  describe('AC025-4: All components properly respond to theme changes', () => {
    it('should apply theme to all Tailwind color classes', async () => {
      render(
        <MemoryRouter>
          <ThemeProvider>
            <div className="bg-primary text-foreground">Test Element</div>
            <ThemeSwitcher />
          </ThemeProvider>
        </MemoryRouter>
      );

      // Open and select theme
      const paletteButton = screen.getByLabelText('Theme Switcher');
      fireEvent.click(paletteButton);

      await waitFor(() => {
        expect(screen.getByText('Choose a Theme')).toBeInTheDocument();
      });

      const warmTheme = screen.getByText('Warm & Approachable');
      fireEvent.click(warmTheme);

      // Verify HSL variables are set for all key colors
      await waitFor(() => {
        const root = document.documentElement;
        expect(root.style.getPropertyValue('--primary')).toBeTruthy();
        expect(root.style.getPropertyValue('--secondary')).toBeTruthy();
        expect(root.style.getPropertyValue('--accent')).toBeTruthy();
        expect(root.style.getPropertyValue('--background')).toBeTruthy();
        expect(root.style.getPropertyValue('--foreground')).toBeTruthy();
      });
    });
  });
});
