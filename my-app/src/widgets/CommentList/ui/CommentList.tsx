import type { FC } from "react";
import type { Comment } from "../../../entities/post/ui/PostCard";
import { CommentCard } from "../../../entities/comment/CommentCard";
import styles from "./CommentList.module.css";

interface CommentListProps {
    comments: Comment[];
};

export const CommentList: FC<CommentListProps> = ( { comments } ) => {
    return (
        <div className={styles.commentList}>
            {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

