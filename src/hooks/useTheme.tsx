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
    
    // Apply CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-surface', theme.colors.surface);
    root.style.setProperty('--color-text-primary', theme.colors.text.primary);
    root.style.setProperty('--color-text-secondary', theme.colors.text.secondary);
    root.style.setProperty('--color-text-accent', theme.colors.text.accent);
    root.style.setProperty('--color-border', theme.colors.border);
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
