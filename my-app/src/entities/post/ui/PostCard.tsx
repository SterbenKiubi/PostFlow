import styles from "./PostCard.module.css"
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
};

interface PostCardProps {
    post: Post
};

export const PostCard = ( { post }: PostCardProps ) => {
    return (
        <div className={styles.postCard}>
            <h2>Title: {post.title}</h2>
            <p><span>userId:</span> {post.userId}</p>
            <p><span>id:</span> {post.id}</p>
            <p><span>body:</span> {post.body}</p>
        </div>
    )
};



