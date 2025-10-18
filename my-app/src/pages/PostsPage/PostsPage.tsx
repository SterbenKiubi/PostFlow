import { type FC } from "react";
import { PostList } from "../../widgets/PostList/PostList";
import { useGetPostsQuery } from "../../entities/post/api/postsApi";

export const PostsPage: FC = () => {
    const { data: posts = [], error, isLoading } = useGetPostsQuery();

    if (error) {
        return <div>Posts loading error</div>;
    }

    return <PostList posts={posts} isLoading={isLoading} />
};