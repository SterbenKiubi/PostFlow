import { useTheme } from "../../lib/theme/useTheme";

export const Button = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme}>{isDark ? 'Light theme' : 'Dark theme'}</button>
    )
};