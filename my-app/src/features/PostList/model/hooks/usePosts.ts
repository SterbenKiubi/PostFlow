import { useMemo } from "react";
import type { Post } from "../../../../entities/post/model/types";
import { mockPosts } from "../../../../shared/mocks/posts";

interface UsePostsProps {
  userId?: number;
};

export const usePosts = ({ userId }: UsePostsProps = {}): Post[] => {
  const posts = useMemo(() => {
    return userId ? mockPosts.filter((post) => post.userId === userId) : mockPosts;
  }, [userId]);

  return posts;
};