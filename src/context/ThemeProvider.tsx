import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppTheme, AppThemeMode, darkTheme, lightTheme } from '../theme/theme';

interface ThemeContextValue {
    theme: AppTheme;
    setThemeMode: (mode: AppThemeMode) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<AppThemeMode>('light');

    const theme = mode === 'dark' ? darkTheme : lightTheme;

    const toggleTheme = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, setThemeMode: setMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useMootTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
};
