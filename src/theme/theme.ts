export type AppThemeMode = 'light' | 'dark';

export interface AppTheme {
  mode: AppThemeMode;
  colors: {
    background: string;
    surface: string;
    card: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryHover: string;
    border: string;
    shadow: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  radii: {
    sm: number;
    md: number;
    lg: number;
    pill: number;
  };
  typography: {
    h1: number;
    h2: number;
    h3: number;
    body: number;
    small: number;
  };
}

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const radii = {
  sm: 4,
  md: 8,
  lg: 16,
  pill: 9999,
};

const typography = {
  h1: 32,
  h2: 28,
  h3: 22,
  body: 16,
  small: 14,
};

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    background: '#FFFFFF',
    surface: '#F7F7F7',
    card: '#F2F2F2',
    text: '#000000',
    textSecondary: '#4A4A4A',
    primary: '#2D7FF9',
    primaryHover: '#1C63D6',
    border: '#E0E0E0',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  spacing,
  radii,
  typography,
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    background: '#000000',
    surface: '#111111',
    card: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#A5A5A5',
    primary: '#4D9FFF',
    primaryHover: '#3C7ED9',
    border: '#333333',
    shadow: 'rgba(255, 255, 255, 0.1)',
  },
  spacing,
  radii,
  typography,
};
