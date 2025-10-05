import type { Comment } from "../post/ui/PostCard";
import styles from "./CommentCard.module.css";
import type { FC } from "react";

interface CommentCardProps {
    comment: Comment;
};

export const CommentCard: FC<CommentCardProps> = ( { comment } ) => {
    return (
        <div className={styles.commentContent}>
            <div className={styles.commentEmail}>{comment.email}</div>
            <p>{comment.body}</p>
        </div>
    )
};