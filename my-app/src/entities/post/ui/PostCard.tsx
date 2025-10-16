import { useState } from "react";
import styles from "./PostCard.module.css"
import { Button } from "../../../shared/ui/Button/Button";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import { Link } from "react-router-dom";
import { useGetUserByIdQuery } from "../../user/api/usersApi";
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
};

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

interface PostCardProps {
    post: Post;
    comments: Comment[];
};

export const PostCard = ( { post, comments }: PostCardProps ) => {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    const toggleComments = () => {
        setIsCommentsOpen(prev => !prev);
    };

    const { data: user } = useGetUserByIdQuery(post.userId);

    return (
        <div className={styles.postCard}>
            <h2 className={styles.cardTitle}>
                <Link to={`/posts/${post.id}`}>
                    Title: {post.title}
                </Link>
            </h2>
            <p><span>userId:</span> {post.userId}</p>
            <p><span>id:</span> {post.id}</p>
            <p><span>body:</span> {post.body}</p>
            <Link to={`/users/${post.userId}/posts`}>
                <p className={styles.cardAuthor}>
                    <span>Author: </span>{user?.name}
                </p>
            </Link>
            <Button onClick={toggleComments}>
                {isCommentsOpen ? "Close comments ▲" : "Show comments ▼"}
            </Button>
            {isCommentsOpen && <CommentList comments={comments} />}
        </div>
    )
};