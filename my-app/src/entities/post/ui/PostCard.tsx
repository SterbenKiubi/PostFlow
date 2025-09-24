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
        <div className="post-card">
            <h2>Title: {post.title}</h2>
            <p>userId: {post.userId}</p>
            <p>id: {post.id}</p>
            <p>body: {post.body}</p>
        </div>
    )
};



