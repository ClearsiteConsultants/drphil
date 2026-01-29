export type ThemeVariant = 'modern-minimal' | 'professional-medical' | 'warm-approachable';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    accent: string;
  };
  border: string;
}

export interface Theme {
  id: ThemeVariant;
  name: string;
  description: string;
  colors: ThemeColors;
}

export const themes: Record<ThemeVariant, Theme> = {
  'modern-minimal': {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    description: 'Clean white with lots of space',
    colors: {
      primary: '#000000',
      secondary: '#4A4A4A',
      accent: '#2563EB',
      background: '#FFFFFF',
      surface: '#F9FAFB',
      text: {
        primary: '#111827',
        secondary: '#6B7280',
        accent: '#2563EB',
      },
      border: '#E5E7EB',
    },
  },
  'professional-medical': {
    id: 'professional-medical',
    name: 'Professional Medical',
    description: 'Blues and whites, trust-focused',
    colors: {
      primary: '#1E40AF',
      secondary: '#3B82F6',
      accent: '#10B981',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      text: {
        primary: '#1E293B',
        secondary: '#64748B',
        accent: '#1E40AF',
      },
      border: '#CBD5E1',
    },
  },
  'warm-approachable': {
    id: 'warm-approachable',
    name: 'Warm & Approachable',
    description: 'Earth tones with personal touch',
    colors: {
      primary: '#92400E',
      secondary: '#D97706',
      accent: '#059669',
      background: '#FFFBEB',
      surface: '#FFFFFF',
      text: {
        primary: '#78350F',
        secondary: '#92400E',
        accent: '#D97706',
      },
      border: '#FDE68A',
    },
  },
};

export const defaultTheme: ThemeVariant = 'modern-minimal';
