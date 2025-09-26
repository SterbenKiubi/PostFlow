import styles from "./Header.module.css";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";

export const Header = () => {

    return (
        <header className={styles.header}>
            <h1>PostFlow App</h1>
                <ThemeSwitcher></ThemeSwitcher>
        </header>
    )
};