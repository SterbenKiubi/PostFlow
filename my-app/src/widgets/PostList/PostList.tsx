import { Fragment } from "react";
import { mockPosts } from "../../shared/mocks/posts";
import type { Post } from "../../entities/post/ui/PostCard";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { mockComments } from "../../shared/mocks/comments";

export const PostListContent = () => {
    return (
        <div className={styles.postList}>
            {mockPosts.map((post: Post) => {

                const postComments = mockComments.filter(comment => comment.postId === post.id);
                
                return (
                    <Fragment key={post.id}>
                        <PostCard post={post} comments={postComments} />
                    </Fragment>
                );
            })}
        </div>
    )
};

export const PostList = withLoading(PostListContent);