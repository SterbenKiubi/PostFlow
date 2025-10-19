import { useEffect, useState } from "react";
import { type FC } from "react";
import { PostList } from "../../widgets/PostList/PostList";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";

export const PostsPage: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const posts = usePosts();
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [isLoading]);

    return <PostList posts={posts} isLoading={isLoading} />
};