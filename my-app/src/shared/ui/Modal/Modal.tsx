import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import type { FC, PropsWithChildren } from "react";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalComponent: FC<PropsWithChildren<ModalProps>> = ({ 
    isOpen, 
    onClose, 
    children 
}) => {
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

export const Modal = Object.assign(ModalComponent, {
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter
});