import { Fragment, useState, useCallback, useMemo } from "react";
import type { Post } from "../../entities/post/model/types";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { ItemList } from "../../shared/ui/ItemList/ItemList";

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

    const renderPost = useCallback((post: Post) => (
        <Fragment key={post.id}>
            <PostCard post={post} />
        </Fragment>
    ), []);

    return (
        <div className={styles.container}>
            <PostLengthFilter 
                minLength={minLength}
                onMinLengthChange={handleMinLengthChange}/>
            
            <ItemList
                items={filteredPosts}
                renderItem={renderPost}
                className={styles.postList}
            />
        </div>
    )
};

export const PostList = withLoading(PostListContent);