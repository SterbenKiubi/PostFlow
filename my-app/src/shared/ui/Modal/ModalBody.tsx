import type { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalBody: FC<{children: ReactNode}> = ({ children }) => (
    <div className={styles.modalBody}>{children}</div>
);