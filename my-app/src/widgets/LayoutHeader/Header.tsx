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
                <Modal.Header>
                    <h2>О проекте</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>Приложение постов</p>
                </Modal.Body>
                <Modal.Footer>
                    <a href="https://github.com/SterbenKiubi"
                    target="_blank">SterbenKiubi</a>
                </Modal.Footer>
            </Modal>
            <ThemeSwitcher />
        </header>
    )
};