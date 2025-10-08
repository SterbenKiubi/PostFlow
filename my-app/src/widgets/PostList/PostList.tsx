import { Fragment, useState, useCallback, useMemo } from "react";
import type { Post } from "../../entities/post/ui/PostCard";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { mockComments } from "../../shared/mocks/comments";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";

interface PostListProps {
    posts: Post[];
}

export const PostListContent = ({ posts }: PostListProps) => {
    const [minLength, setMinLength] = useState(0);

    const handleMinLengthChange = useCallback((newMinLength: number) => {
        setMinLength(newMinLength);
    }, []);

    const filteredPosts = useMemo(() => 
        filterByLength(posts, minLength),
        [posts, minLength]
    );

    const getPostComments = useCallback((postId: number) => {
        return mockComments.filter(comment => comment.postId === postId);
    }, []);

    return (
        <div className={styles.container}>
            <PostLengthFilter 
                minLength={minLength}
                onMinLengthChange={handleMinLengthChange}/>
            
            <div className={styles.postList}>
                {filteredPosts.map((post: Post) => {
                    const postComments = getPostComments(post.id);
                    
                    return (
                        <Fragment key={post.id}>
                            <PostCard post={post} comments={postComments} />
                        </Fragment>
                    );
                })}
            </div>
        </div>
    )
};

export const PostList = withLoading(PostListContent);