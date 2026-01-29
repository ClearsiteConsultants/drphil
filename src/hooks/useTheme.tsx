import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeVariant, themes, defaultTheme } from '../constants/themes';

interface ThemeContextType {
  currentTheme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
  theme: typeof themes[ThemeVariant];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>(() => {
    const saved = localStorage.getItem('theme-variant');
    return (saved as ThemeVariant) || defaultTheme;
  });

  const theme = themes[currentTheme];

  useEffect(() => {
    localStorage.setItem('theme-variant', currentTheme);
    
    // Convert hex to HSL for Tailwind compatibility
    const hexToHSL = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result) return '0 0% 0%';
      
      let r = parseInt(result[1], 16) / 255;
      let g = parseInt(result[2], 16) / 255;
      let b = parseInt(result[3], 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
          case g: h = ((b - r) / d + 2) / 6; break;
          case b: h = ((r - g) / d + 4) / 6; break;
        }
      }

      h = Math.round(h * 360);
      s = Math.round(s * 100);
      l = Math.round(l * 100);

      return `${h} ${s}% ${l}%`;
    };

    // Apply CSS custom properties for both legacy and Tailwind
    const root = document.documentElement;
    
    // Legacy theme variables (keep for ThemeSwitcher button)
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-surface', theme.colors.surface);
    root.style.setProperty('--color-text-primary', theme.colors.text.primary);
    root.style.setProperty('--color-text-secondary', theme.colors.text.secondary);
    root.style.setProperty('--color-text-accent', theme.colors.text.accent);
    root.style.setProperty('--color-border', theme.colors.border);
    
    // Tailwind HSL variables
    root.style.setProperty('--primary', hexToHSL(theme.colors.primary));
    root.style.setProperty('--secondary', hexToHSL(theme.colors.secondary));
    root.style.setProperty('--accent', hexToHSL(theme.colors.accent));
    root.style.setProperty('--background', hexToHSL(theme.colors.background));
    root.style.setProperty('--foreground', hexToHSL(theme.colors.text.primary));
    root.style.setProperty('--card', hexToHSL(theme.colors.surface));
    root.style.setProperty('--card-foreground', hexToHSL(theme.colors.text.primary));
    root.style.setProperty('--popover', hexToHSL(theme.colors.surface));
    root.style.setProperty('--popover-foreground', hexToHSL(theme.colors.text.primary));
    root.style.setProperty('--muted', hexToHSL(theme.colors.text.secondary));
    root.style.setProperty('--muted-foreground', hexToHSL(theme.colors.text.secondary));
    root.style.setProperty('--border', hexToHSL(theme.colors.border));
    root.style.setProperty('--input', hexToHSL(theme.colors.border));
    root.style.setProperty('--ring', hexToHSL(theme.colors.accent));
    
    // Set foreground colors for variants
    root.style.setProperty('--primary-foreground', '0 0% 100%'); // white text on primary
    root.style.setProperty('--secondary-foreground', '0 0% 100%'); // white text on secondary
    root.style.setProperty('--accent-foreground', '0 0% 100%'); // white text on accent
  }, [currentTheme, theme]);

  const setTheme = (newTheme: ThemeVariant) => {
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
