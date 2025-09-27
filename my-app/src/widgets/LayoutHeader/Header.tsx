import styles from "./Header.module.css";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { Modal } from "../../shared/ui/Modal/Modal";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <h1>PostFlow App</h1>
            <button className={styles.modalButton} onClick={() => setIsOpen(true)}>Открыть модальное окно</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>О проекте</h2>
                <p>Приложение постов</p>
            </Modal>
            <ThemeSwitcher />
        </header>
    )
};