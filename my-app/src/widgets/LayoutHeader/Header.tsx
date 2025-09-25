import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button/Button";

export const Header = () => {

    return (
        <header className={styles.header}>
            <h1>PostFlow App</h1>
            <Button />
        </header>
    )
};