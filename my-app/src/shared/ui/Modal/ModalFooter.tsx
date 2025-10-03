import type { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalFooter: FC<{children: ReactNode}> = ({ children }) => (
    <div className={styles.modalFooter}>{children}</div>
);