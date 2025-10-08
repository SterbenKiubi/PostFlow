import type { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalHeader: FC<{children: ReactNode}> = ({ children }) => (
    <div className={styles.modalHeader}>{children}</div>
);