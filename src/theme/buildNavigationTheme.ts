import { Theme } from '../ThemeContext'; // adjust path

export const buildNavigationTheme = (theme: Theme) => {
  const base = theme.mode === 'dark' ? DarkTheme : DefaultTheme;

  return {
    ...base,
    colors: {
      ...base.colors,
      background: theme.colors.background,
      card: theme.colors.card,
      text: theme.colors.text,
      primary: theme.colors.primary,
      border: 'transparent', // optional
    },
  };
};
