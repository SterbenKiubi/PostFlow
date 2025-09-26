import { useTheme } from "../../lib/theme/useTheme";
import styles from "./Button.module.css";

export const Button = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <button className={styles.button} onClick={toggleTheme}>{isDark ? 'Light theme' : 'Dark theme'}</button>
    )
};