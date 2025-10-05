import styles from "./PostLengthFilter.module.css";
import { memo } from "react";

interface PostLengthFilterProps {
    minLength: number;
    onMinLengthChange: (minLength: number) => void;
};

export const PostLengthFilter = memo(({ 
    minLength, 
    onMinLengthChange 
}: PostLengthFilterProps) => {
    return (
        <div className={styles.filterContainer}>
            <label>
                Minimum title length: {minLength}
            </label>
            <input
                type="range"
                min="0"
                max="50"
                value={minLength}
                onChange={(e) => onMinLengthChange(Number(e.target.value))}
                className={styles.filterInput}
            />
        </div>
    );
});