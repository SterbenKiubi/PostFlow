import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className={styles.modalOverlay} onClick={onClose} />
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <button className={styles.modalClose} onClick={onClose}>
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </>,
        document.body
    );
};