import { Fragment } from "react";
import { mockPosts } from "../../shared/mocks/posts";
import type { Post } from "../../entities/post/ui/PostCard";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";

export const PostList = () => {
    return (
        <div className={styles.postList}>
            {mockPosts.map((post: Post) => (
                <Fragment key={post.id}>
                    <PostCard post={post} />
                </Fragment>
            ))}
        </div>
    )
};