import { createContext } from "react";

interface InterfaceThemeContext {
    isDark: boolean;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<InterfaceThemeContext | undefined>(undefined);