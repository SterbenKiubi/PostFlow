import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";

export const ThemeSwitcher = () => {
    const { isDark, toggleTheme } = useTheme();
    const text: string = isDark ? 'Light theme' : 'Dark theme';

    return <Button onClick={toggleTheme}>{text}</Button>
};