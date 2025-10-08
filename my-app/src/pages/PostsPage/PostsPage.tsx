import { useEffect, useState } from "react";
import { type FC } from "react";
import { PostList } from "../../widgets/PostList/PostList";

export const PostsPage: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [isLoading]);

    return <PostList isLoading={isLoading} />
};