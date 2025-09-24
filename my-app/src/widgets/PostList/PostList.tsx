import { mockPosts } from "../../shared/mocks/posts";
import type { Post } from "../../entities/post/ui/PostCard";
import { PostCard } from "../../entities/post/ui/PostCard";

export const PostList = () => {
    return (
        <div className="post-list">
            {mockPosts.map((post: Post) => {
                return <PostCard key={post.id} post={post} />
            })}
        </div>
    )
};