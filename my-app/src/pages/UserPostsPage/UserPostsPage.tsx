import type { FC } from "react";
import { PostList } from "../../widgets/PostList/PostList";
import { useParams } from "react-router-dom";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";

export const UserPostsPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const posts = usePosts({ userId: Number(id) });

    return <PostList posts={posts} isLoading={false} />
};